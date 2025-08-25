/*
  Warnings:

  - You are about to drop the column `status` on the `person` table. All the data in the column will be lost.
  - Changed the type of `status` on the `attendance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LEAVE');

-- AlterTable
ALTER TABLE "attendance" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "status",
ADD COLUMN     "status" "AttendanceStatus" NOT NULL;

-- AlterTable
ALTER TABLE "person" DROP COLUMN "status";

-- DropEnum
DROP TYPE "LeaveStatus";
