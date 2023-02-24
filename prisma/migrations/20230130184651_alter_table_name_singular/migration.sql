-- CreateTable
CREATE TABLE `Doubts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `file` VARCHAR(191) NULL,
    `message` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Doubts_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;