-- CreateTable
CREATE TABLE "Waiter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Waiter_pkey" PRIMARY KEY ("id")
);
