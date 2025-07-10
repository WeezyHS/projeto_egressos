/*
  Warnings:

  - A unique constraint covering the columns `[emailPreferencial]` on the table `Egresso` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `egresso` DROP FOREIGN KEY `Egresso_pessoaId_fkey`;

-- AlterTable
ALTER TABLE `egresso` MODIFY `pessoaId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Egresso_emailPreferencial_key` ON `Egresso`(`emailPreferencial`);

-- AddForeignKey
ALTER TABLE `Egresso` ADD CONSTRAINT `Egresso_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
