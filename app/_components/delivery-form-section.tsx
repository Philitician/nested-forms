"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { DeliveryForm } from "../types";

export function DeliveryFormSection() {
  return (
    <div className="flex flex-col gap-4">
      <OrderNrField />
      <DeliveryAddressField />
    </div>
  );
}

function OrderNrField() {
  const { control } = useFormContext<DeliveryForm>();

  return (
    <FormField
      control={control}
      name="orderNr"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Ordrenummer</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function DeliveryAddressField() {
  const { control } = useFormContext<DeliveryForm>();
  return (
    <FormField
      control={control}
      name="deliveryAddress"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Leveringsadresse</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
