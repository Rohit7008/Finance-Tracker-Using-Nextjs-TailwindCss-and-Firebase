export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
  });

  return formatter.format(amount);
};
