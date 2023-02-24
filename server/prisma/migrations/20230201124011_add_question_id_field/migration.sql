/*
  Warnings:

  - Added the required column `questionId` to the `answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `answers` ADD COLUMN `questionId` INTEGER NOT NULL;
