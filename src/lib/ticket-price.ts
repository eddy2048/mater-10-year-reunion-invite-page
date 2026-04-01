const DEFAULT_PRICE = parseInt(
  process.env.DEFAULT_TICKET_PRICE_CENTS || "5000",
  10
);

export function getTicketPrice(): number {
  return DEFAULT_PRICE;
}
