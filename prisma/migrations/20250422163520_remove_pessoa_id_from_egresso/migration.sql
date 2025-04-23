/*
  Warnings:

  - You are about to drop the column `matriculaId` on the `egresso` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `egresso` table. All the data in the column will be lost.
  - You are about to drop the column `egressoId` on the `matricula` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `egresso` DROP FOREIGN KEY `Egresso_matriculaId_fkey`;

-- DropForeignKey
ALTER TABLE `egresso` DROP FOREIGN KEY `Egresso_pessoaId_fkey`;

-- DropIndex
DROP INDEX `Egresso_matriculaId_key` ON `egresso`;

-- DropIndex
DROP INDEX `Egresso_pessoaId_key` ON `egresso`;

-- DropIndex
DROP INDEX `Matricula_egressoId_key` ON `matricula`;

-- AlterTable
ALTER TABLE `egresso` DROP COLUMN `matriculaId`,
    DROP COLUMN `pessoaId`;

-- AlterTable
ALTER TABLE `matricula` DROP COLUMN `egressoId`;
