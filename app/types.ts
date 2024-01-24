import { z } from "zod";

export const deliveryFormSchema = z.object({
  orderNr: z.string().min(5),
  deliveryAddress: z.string().min(5),
});

export type DeliveryForm = z.infer<typeof deliveryFormSchema>;
