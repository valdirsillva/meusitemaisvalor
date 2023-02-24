/*
  Warnings:

  - Added the required column `departmentId` to the `relationstypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `relationstypes` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `relationstypes` ADD CONSTRAINT `relationstypes_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
