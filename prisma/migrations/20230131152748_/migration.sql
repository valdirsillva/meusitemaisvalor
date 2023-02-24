/*
  Warnings:

  - You are about to drop the `doubts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `suggestions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `doubts`;

-- DropTable
DROP TABLE `suggestions`;

-- CreateTable
CREATE TABLE `Suggestions_or_doubts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content_name` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `file` VARCHAR(191) NULL,
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
