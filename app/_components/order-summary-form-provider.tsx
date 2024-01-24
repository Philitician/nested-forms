"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { OrderSummaryForm, orderSummaryFormSchema } from "../types";
import { orderSummaryAction } from "../_actions";

type OrderSummaryFormProviderProps = {
  children: React.ReactNode;
};

export function OrderSummaryFormProvider({
  children,
}: OrderSummaryFormProviderProps) {
  const form = useForm<OrderSummaryForm>({
    resolver: zodResolver(orderSummaryFormSchema),
  });
  const onSubmit = async (data: OrderSummaryForm) => {
    await orderSummaryAction(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
