import { prisma } from "./db";

const DEFAULT_PRICE = parseInt(
  process.env.DEFAULT_TICKET_PRICE_CENTS || "5000",
  10
);

export async function getTicketPrice(): Promise<number> {
  const config = await prisma.ticketConfig.findUnique({
    where: { id: "default" },
  });
  return config?.price ?? DEFAULT_PRICE;
}

export async function setTicketPrice(priceInCents: number): Promise<void> {
  await prisma.ticketConfig.upsert({
    where: { id: "default" },
    update: { price: priceInCents },
    create: { id: "default", price: priceInCents },
  });
}
