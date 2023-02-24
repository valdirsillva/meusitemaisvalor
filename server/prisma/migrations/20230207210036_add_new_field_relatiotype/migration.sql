/*
  Warnings:

  - Added the required column `relationType` to the `Suggestions_or_doubts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `suggestions_or_doubts` ADD COLUMN `relationType` VARCHAR(191) NOT NULL;
