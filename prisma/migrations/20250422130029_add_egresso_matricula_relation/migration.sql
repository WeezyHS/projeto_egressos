/*
  Warnings:

  - A unique constraint covering the columns `[matriculaId]` on the table `Egresso` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `egresso` ADD COLUMN `matriculaId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Egresso_matriculaId_key` ON `Egresso`(`matriculaId`);

-- AddForeignKey
ALTER TABLE `Egresso` ADD CONSTRAINT `Egresso_matriculaId_fkey` FOREIGN KEY (`matriculaId`) REFERENCES `Matricula`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
