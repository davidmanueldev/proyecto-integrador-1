"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

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

export async function createAccount(data) {
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

    // Convertir el balance a número

    const balanceFloat = parseFloat(data.balance);

    if (isNaN(balanceFloat)) {
      throw new Error("El balance debe ser un número");
    }

    // Verificar si el usuario ya tiene una cuenta

    const existingAccounts = await db.account.findMany({
      where: {
        userId: user.id,
      },
    });

    const shouldBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;

    // Si esta cuenta es la primera, marcarla como predeterminada y desactivar las demás
    if (shouldBeDefault) {
      await db.account.updateMany({
        where: {
          userId: user.id,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    const serializedAccount = serializeTransaction(account);

    revalidatePath("/dashboard");

    return { success: true, data: serializedAccount };
  } catch (error) {
    throw new Error("Error al crear la cuenta: " + error.message);
  }
}

export async function getUserAccounts() {
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

  const accounts = await db.account.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: {
          transactions: true,
        },
      },
    },
  });
  const serializedAccount = accounts.map(serializeTransaction);

  return serializedAccount;
}
