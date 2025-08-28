/*
  Warnings:

  - You are about to drop the column `date` on the `attendance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attendance" DROP COLUMN "date",
ADD COLUMN     "end_dttm" TIMESTAMP(3),
ADD COLUMN     "start_dattm" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "place" ADD COLUMN     "size" DECIMAL(65,30);
