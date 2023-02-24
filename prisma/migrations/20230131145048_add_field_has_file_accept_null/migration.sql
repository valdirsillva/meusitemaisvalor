/*
  Warnings:

  - You are about to drop the column `file` on the `candidates` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `candidates` DROP COLUMN `file`,
    ADD COLUMN `has_file` VARCHAR(191) NULL;
