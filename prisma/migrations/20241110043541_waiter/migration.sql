-- AlterTable
ALTER TABLE "Waiter" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Waiter" ADD CONSTRAINT "Waiter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
