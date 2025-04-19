import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
// Esto es para evitar que se creen múltiples instancias de PrismaClient en desarrollo
// y así evitar el error de "Too many connections".
// En producción, se crea una nueva instancia cada vez.
// En desarrollo, se reutiliza la misma instancia para evitar el error de "Too many connections".
// Esto es porque en desarrollo, Next.js crea múltiples instancias de la aplicación
// y cada una de ellas crea una nueva instancia de PrismaClient.
// En producción, Next.js crea una sola instancia de la aplicación y por lo tanto
// solo se crea una nueva instancia de PrismaClient.

// globalThis.prisma: Esta variable global asegura que la instancia del cliente Prisma es
// reutilizada a través de recargas en caliente durante el desarrollo. Sin esto, cada vez que la aplicación
// se recargue, se creará una nueva instancia del cliente Prisma, lo que podría provocar
// problemas de conexión.
