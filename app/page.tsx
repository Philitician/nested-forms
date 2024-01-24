import { OrderSummaryFormProvider } from "./_components/order-summary-form-provider";
import { DeliveryFormSection } from "./_components/delivery-form-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1>Litt info</h1>
      <OrderSummaryFormProvider>
        <DeliverySection />
        <Button type="submit">Submit</Button>
      </OrderSummaryFormProvider>
    </main>
  );
}

async function DeliverySection() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h2>Levering: navn</h2>
      <DeliveryFormSection />
    </div>
  );
}
