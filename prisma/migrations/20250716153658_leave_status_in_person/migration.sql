-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('PRESENT', 'ABSENT', 'LEAVE');

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "status" "LeaveStatus" NOT NULL DEFAULT 'PRESENT';
