/*
  Warnings:

  - A unique constraint covering the columns `[egressoId]` on the table `Matricula` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `matricula` ADD COLUMN `egressoId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Matricula_egressoId_key` ON `Matricula`(`egressoId`);
