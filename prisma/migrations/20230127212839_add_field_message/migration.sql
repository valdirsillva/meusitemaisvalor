/*
  Warnings:

  - Added the required column `message` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `message` VARCHAR(191) NOT NULL;
