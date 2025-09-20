interface iAppProps {
  amount: number;
  currency: "USD" | "EUR" ;
}

export function formatCurrency({amount, currency}: iAppProps) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

export function disabledDates(date: Date) {
  if (!date) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}
