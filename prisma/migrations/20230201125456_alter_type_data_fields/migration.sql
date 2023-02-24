/*
  Warnings:

  - You are about to drop the column `canal` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `how_i_found_out` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `it_is_manager_involved` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `local_occurrence` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `relation_type_with_company` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `report_type` on the `reportsrecipients` table. All the data in the column will be lost.
  - You are about to drop the column `you_know_manager` on the `reportsrecipients` table. All the data in the column will be lost.
  - Added the required column `question2` to the `ReportsRecipients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question3` to the `ReportsRecipients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reportsrecipients` DROP COLUMN `canal`,
    DROP COLUMN `how_i_found_out`,
    DROP COLUMN `it_is_manager_involved`,
    DROP COLUMN `local_occurrence`,
    DROP COLUMN `relation_type_with_company`,
    DROP COLUMN `report_type`,
    DROP COLUMN `you_know_manager`,
    ADD COLUMN `question1` INTEGER NULL,
    ADD COLUMN `question2` INTEGER NOT NULL,
    ADD COLUMN `question3` INTEGER NOT NULL,
    ADD COLUMN `question4` INTEGER NULL,
    ADD COLUMN `question5` INTEGER NULL,
    ADD COLUMN `question6` INTEGER NULL,
    ADD COLUMN `question7` INTEGER NULL;
