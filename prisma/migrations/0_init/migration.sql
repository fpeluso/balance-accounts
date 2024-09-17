-- CreateTable
CREATE TABLE "bank_account" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "balance" DECIMAL(10,2),

    CONSTRAINT "bank_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "plafond" DECIMAL(10,2),
    "used" DECIMAL(10,2),

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

