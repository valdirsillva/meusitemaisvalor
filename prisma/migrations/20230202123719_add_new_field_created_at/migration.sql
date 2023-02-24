/*
  Warnings:

  - Added the required column `created_at` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clients` ADD COLUMN `created_at` DATETIME(3) NOT NULL;
