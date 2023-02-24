/*
  Warnings:

  - Added the required column `local_occurrence` to the `reports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `report_type` to the `reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reports` ADD COLUMN `canal` VARCHAR(191) NULL,
    ADD COLUMN `how_i_found_out` VARCHAR(191) NULL,
    ADD COLUMN `it_is_manager_involved` VARCHAR(191) NULL,
    ADD COLUMN `local_occurrence` VARCHAR(191) NOT NULL,
    ADD COLUMN `relation_type_with_company` VARCHAR(191) NULL,
    ADD COLUMN `report_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `you_know_manager` VARCHAR(191) NULL,
    MODIFY `details` VARCHAR(191) NULL,
    MODIFY `has_witnesses` VARCHAR(191) NULL,
    MODIFY `evidence_of_facts` VARCHAR(191) NULL,
    MODIFY `has_balance` VARCHAR(191) NULL;
