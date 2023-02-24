-- CreateTable
CREATE TABLE `reports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `details` VARCHAR(191) NOT NULL,
    `has_witnesses` VARCHAR(191) NOT NULL,
    `evidence_of_facts` VARCHAR(191) NOT NULL,
    `has_balance` VARCHAR(191) NOT NULL,
    `suggestion` VARCHAR(191) NULL,
    `has_file` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
