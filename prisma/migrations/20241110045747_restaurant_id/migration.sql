/*
  Warnings:

  - You are about to drop the column `userId` on the `Waiter` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Waiter" DROP CONSTRAINT "Waiter_userId_fkey";

-- AlterTable
ALTER TABLE "Waiter" DROP COLUMN "userId",
ADD COLUMN     "restauranteId" TEXT;

-- AddForeignKey
ALTER TABLE "Waiter" ADD CONSTRAINT "Waiter_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
