/*
  Warnings:

  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('HUMAN_RESOURCES', 'ADMIN', 'PROJECT_LEADER', 'COMMON');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Roles" NOT NULL;