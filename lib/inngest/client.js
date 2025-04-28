import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "yafue",
  name: "YaFue",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff || Retirada exponencial, estrategia de manejo de errores
    maxAttempts: 5, // Max attempts || Máximo número de intentos
  }),
});
