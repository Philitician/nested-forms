import { z } from "zod";

export const orderSummaryFormSchema = z.object({
  orderNr: z.string().min(5),
  deliveryAddress: z.string().min(5),
});

export type OrderSummaryForm = z.infer<typeof orderSummaryFormSchema>;
