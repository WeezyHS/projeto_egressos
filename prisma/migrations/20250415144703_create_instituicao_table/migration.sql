-- CreateTable
CREATE TABLE `Instituicao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fotoPerfil` VARCHAR(191) NULL,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `nomeRepresentante` VARCHAR(191) NULL,
    `cpfRepresentante` VARCHAR(191) NULL,

    UNIQUE INDEX `Instituicao_cnpj_key`(`cnpj`),
    INDEX `Instituicao_cnpj_idx`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
