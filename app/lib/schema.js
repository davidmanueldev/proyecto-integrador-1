import { z } from 'zod';

export const accountSchema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    type: z.enum(["CURRENT", "SAVINGS"]),
    balance: z.string().min(1, "Se requiere un saldo inicial"),
})