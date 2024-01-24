"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DeliveryForm, deliveryFormSchema } from "../types";

type FormWrapperProps = {
  children: React.ReactNode;
};

export function OrderSummaryFormProvider({ children }: FormWrapperProps) {
  const form = useForm<DeliveryForm>({
    resolver: zodResolver(deliveryFormSchema),
  });
  const onSubmit = (data: DeliveryForm) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
