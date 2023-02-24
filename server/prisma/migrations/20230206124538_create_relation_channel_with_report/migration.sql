/*
  Warnings:

  - Made the column `channelID` on table `reports` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `reports` MODIFY `channelID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_channelID_fkey` FOREIGN KEY (`channelID`) REFERENCES `channel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
