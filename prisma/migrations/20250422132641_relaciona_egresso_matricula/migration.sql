/*
  Warnings:

  - A unique constraint covering the columns `[pessoaId]` on the table `Egresso` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pessoaId` to the `Egresso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `egresso` ADD COLUMN `pessoaId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Egresso_pessoaId_key` ON `Egresso`(`pessoaId`);

-- AddForeignKey
ALTER TABLE `Egresso` ADD CONSTRAINT `Egresso_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
