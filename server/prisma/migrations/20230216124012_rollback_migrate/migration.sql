/*
  Warnings:

  - You are about to drop the column `relationTypeId` on the `departments` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `relationstypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `departments` DROP FOREIGN KEY `departments_relationTypeId_fkey`;

-- AlterTable
ALTER TABLE `departments` DROP COLUMN `relationTypeId`;

-- AlterTable
ALTER TABLE `relationstypes` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `relationstypes` ADD CONSTRAINT `relationstypes_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
