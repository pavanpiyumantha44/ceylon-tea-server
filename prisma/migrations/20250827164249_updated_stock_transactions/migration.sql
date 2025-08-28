/*
  Warnings:

  - You are about to drop the column `itemId` on the `stock_transaction` table. All the data in the column will be lost.
  - Added the required column `item_id` to the `stock_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stock_transaction" DROP CONSTRAINT "stock_transaction_itemId_fkey";

-- AlterTable
ALTER TABLE "stock_transaction" DROP COLUMN "itemId",
ADD COLUMN     "item_id" TEXT NOT NULL,
ADD COLUMN     "task_id" TEXT;

-- AddForeignKey
ALTER TABLE "stock_transaction" ADD CONSTRAINT "stock_transaction_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "stock"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
