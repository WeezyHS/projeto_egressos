-- CreateTable
CREATE TABLE `Egresso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `fotoPerfil` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `github` VARCHAR(191) NULL,
    `visivel` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Egresso_cpf_key`(`cpf`),
    UNIQUE INDEX `Egresso_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrabalhoAtual` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empresa` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `anoEntrada` INTEGER NOT NULL,
    `egressoId` INTEGER NOT NULL,

    UNIQUE INDEX `TrabalhoAtual_egressoId_key`(`egressoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TrabalhoAtual` ADD CONSTRAINT `TrabalhoAtual_egressoId_fkey` FOREIGN KEY (`egressoId`) REFERENCES `Egresso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
