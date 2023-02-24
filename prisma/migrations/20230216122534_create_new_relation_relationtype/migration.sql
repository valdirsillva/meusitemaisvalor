/*
  Warnings:

  - You are about to drop the column `departmentId` on the `relationstypes` table. All the data in the column will be lost.
  - Added the required column `relationTypeId` to the `departments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `relationstypes` DROP FOREIGN KEY `relationstypes_departmentId_fkey`;

-- AlterTable
ALTER TABLE `departments` ADD COLUMN `relationTypeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `relationstypes` DROP COLUMN `departmentId`;

-- AddForeignKey
ALTER TABLE `departments` ADD CONSTRAINT `departments_relationTypeId_fkey` FOREIGN KEY (`relationTypeId`) REFERENCES `relationstypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
