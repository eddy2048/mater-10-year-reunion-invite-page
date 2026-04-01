-- CreateTable
CREATE TABLE "TicketPurchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "name" TEXT,
    "amount" INTEGER NOT NULL,
    "method" TEXT NOT NULL,
    "stripeSessionId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TicketConfig" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'default',
    "price" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TicketPurchase_stripeSessionId_key" ON "TicketPurchase"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_stripeSessionId_key" ON "Donation"("stripeSessionId");
