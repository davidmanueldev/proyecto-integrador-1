"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";

const ACCOUNT_ID = "account-id";
const USER_ID = "user-id";

// Categorías con sus rangos típicos de montos, en español
const CATEGORIES = {
  INCOME: [
    { name: "Salario", range: [5000, 8000] },
    { name: "Freelance", range: [1000, 3000] },
    { name: "Inversiones", range: [500, 2000] },
    { name: "Otros ingresos", range: [100, 1000] },
  ],
  EXPENSE: [
    { name: "Vivienda", range: [1000, 2000] },
    { name: "Transporte", range: [100, 500] },
    { name: "Supermercado", range: [200, 600] },
    { name: "Servicios", range: [100, 300] },
    { name: "Entretenimiento", range: [50, 200] },
    { name: "Comida", range: [50, 150] },
    { name: "Compras", range: [100, 500] },
    { name: "Salud", range: [100, 1000] },
    { name: "Educación", range: [200, 1000] },
    { name: "Viajes", range: [500, 2000] },
  ],
};

// Ayudante para generar un monto aleatorio dentro de un rango
function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

// Ayudante para obtener una categoría aleatoria con monto
function getRandomCategory(type) {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

export async function seedTransactions() {
  try {
    const transactions = [];
    let totalBalance = 0;

    for (let i = 90; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const transactionsPerDay = Math.floor(Math.random() * 3) + 1;

      for (let j = 0; j < transactionsPerDay; j++) {
        const type = Math.random() < 0.4 ? "INCOME" : "EXPENSE";
        const { category, amount } = getRandomCategory(type);

        const descripcion =
          type === "INCOME"
            ? `Ingreso por ${category}`
            : `Gasto en ${category}`;

        const transaction = {
          id: crypto.randomUUID(),
          type,
          amount,
          description: descripcion,
          date,
          category, // ← Ya está en español ahora
          status: "COMPLETED",
          userId: USER_ID,
          accountId: ACCOUNT_ID,
          createdAt: date,
          updatedAt: date,
        };

        totalBalance += type === "INCOME" ? amount : -amount;
        transactions.push(transaction);
      }
    }

    await db.$transaction(async (tx) => {
      await tx.transaction.deleteMany({
        where: { accountId: ACCOUNT_ID },
      });

      await tx.transaction.createMany({
        data: transactions,
      });

      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: totalBalance },
      });
    });

    return {
      success: true,
      message: `Se crearon ${transactions.length} transacciones.`,
    };
  } catch (error) {
    console.error("Error al insertar transacciones:", error);
    return {
      success: false,
      error: "Ocurrió un error al crear las transacciones.",
    };
  }
}
