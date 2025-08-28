/*
  Warnings:

  - Added the required column `unit_price` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stock" ADD COLUMN     "unit_price" DOUBLE PRECISION NOT NULL;
