/*
  Warnings:

  - You are about to drop the column `questionId` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `answerId` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `canal` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `how_i_found_out` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `it_is_manager_involved` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `local_occurrence` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `questionId` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `relation_type_with_company` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `report_type` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the column `you_know_manager` on the `reports` table. All the data in the column will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `answers` DROP FOREIGN KEY `answers_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `reports` DROP FOREIGN KEY `reports_answerId_fkey`;

-- DropForeignKey
ALTER TABLE `reports` DROP FOREIGN KEY `reports_questionId_fkey`;

-- AlterTable
ALTER TABLE `answers` DROP COLUMN `questionId`;

-- AlterTable
ALTER TABLE `reports` DROP COLUMN `answerId`,
    DROP COLUMN `canal`,
    DROP COLUMN `how_i_found_out`,
    DROP COLUMN `it_is_manager_involved`,
    DROP COLUMN `local_occurrence`,
    DROP COLUMN `questionId`,
    DROP COLUMN `relation_type_with_company`,
    DROP COLUMN `report_type`,
    DROP COLUMN `you_know_manager`;

-- DropTable
DROP TABLE `questions`;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReportsRecipients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `relation_type_with_company` VARCHAR(191) NULL,
    `report_type` VARCHAR(191) NOT NULL,
    `local_occurrence` VARCHAR(191) NOT NULL,
    `how_i_found_out` VARCHAR(191) NULL,
    `canal` VARCHAR(191) NULL,
    `you_know_manager` VARCHAR(191) NULL,
    `it_is_manager_involved` VARCHAR(191) NULL,
    `report_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
