/*
  Warnings:

  - Added the required column `answerId` to the `reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reports` ADD COLUMN `answerId` INTEGER NOT NULL,
    ADD COLUMN `questionId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_answerId_fkey` FOREIGN KEY (`answerId`) REFERENCES `answers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
