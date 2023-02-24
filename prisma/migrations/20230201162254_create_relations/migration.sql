/*
  Warnings:

  - You are about to drop the column `factAwareId` on the `reports` table. All the data in the column will be lost.
  - Added the required column `factAwareID` to the `reports` table without a default value. This is not possible if the table is not empty.
  - Made the column `branchID` on table `reports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `relationID` on table `reports` required. This step will fail if there are existing NULL values in that column.
  - Made the column `relationTypeID` on table `reports` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `reports` DROP COLUMN `factAwareId`,
    ADD COLUMN `factAwareID` INTEGER NOT NULL,
    MODIFY `branchID` INTEGER NOT NULL,
    MODIFY `relationID` INTEGER NOT NULL,
    MODIFY `relationTypeID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_relationID_fkey` FOREIGN KEY (`relationID`) REFERENCES `relations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_relationTypeID_fkey` FOREIGN KEY (`relationTypeID`) REFERENCES `relationstypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_branchID_fkey` FOREIGN KEY (`branchID`) REFERENCES `branchs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_factAwareID_fkey` FOREIGN KEY (`factAwareID`) REFERENCES `factsAware`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
