/*
  Warnings:

  - You are about to drop the column `departmentId` on the `relationstypes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `relationstypes` DROP FOREIGN KEY `relationstypes_departmentId_fkey`;

-- AlterTable
ALTER TABLE `relationstypes` DROP COLUMN `departmentId`;
