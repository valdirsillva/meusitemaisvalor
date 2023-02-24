/*
  Warnings:

  - You are about to drop the `reportsrecipients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isManagerInvolved` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reports` ADD COLUMN `branchID` INTEGER NULL,
    ADD COLUMN `channelID` INTEGER NULL,
    ADD COLUMN `factAwareId` INTEGER NULL,
    ADD COLUMN `isManagerAware` BOOLEAN NULL,
    ADD COLUMN `isManagerInvolved` BOOLEAN NOT NULL,
    ADD COLUMN `relationID` INTEGER NULL,
    ADD COLUMN `relationTypeID` INTEGER NULL;

-- DropTable
DROP TABLE `reportsrecipients`;

-- CreateTable
CREATE TABLE `relations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeRelation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `branchs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branchText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `factsAware` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `factText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
