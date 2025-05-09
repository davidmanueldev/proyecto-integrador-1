"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { date } from "zod";

const serializeTransaction = (obj) => {
  const serialized = { ...obj };

  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }

  if (obj.amount) {
    serialized.amount = obj.amount.toNumber();
  }

  return serialized;
};

export async function updateDefaultAccount(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Usuario no autorizado");
    }
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    await db.account.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });

    const account = await db.account.update({
      where: {
        id: accountId,
        userId: user.id,
      },
      data: { isDefault: true },
    });

    revalidatePath("/dashboard");
    return { success: true, data: serializeTransaction(account) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getAccountWithTransactions(accountId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Usuario no autorizado");
  }
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const account = await db.account.findUnique({
    where: { id: accountId, userId: user.id },
    include: {
      transactions: {
        orderBy: { date: "desc" },
      },
      _count: {
        select: { transactions: true },
      },
    },
  });

  if (!account) return null;

  return {
    ...serializeTransaction(account),
    transactions: account.transactions.map(serializeTransaction),
  };
}

export async function bulkDeleteTransactions(transactionsIds) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Usuario no autorizado");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("Usuario no encontrado");

    const transactions = await db.transaction.findMany({
      where: {
        id: { in: transactionsIds },
        userId: user.id,
      },
    });

    const accountBalanceChanges = transactions.reduce((acc, transaction) => {
      const change =
        transaction.type === "EXPENSE"
          ? transaction.amount
          : -transaction.amount;

      acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
      return acc;
    }, {});

    // Borrar transacciones y actualizar saldos de cuentas en una transacción
    await db.$transaction(async (tx) => {
      // Borrar transacciones
      await tx.transaction.deleteMany({
        where: {
          id: { in: transactionsIds },
          userId: user.id,
        },
      });

      for (const [accountId, balanceChange] of Object.entries(
        accountBalanceChanges
      )) {
        await tx.account.update({
          where: { id: accountId },
          data: {
            balance: {
              increment: balanceChange,
            },
          },
        });
      }
    });

    revalidatePath("/dashboard");
    revalidatePath("/account/[id]");

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
