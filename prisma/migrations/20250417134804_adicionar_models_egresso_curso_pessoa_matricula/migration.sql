-- CreateTable
CREATE TABLE `Curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Curso_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pessoa_cpf_key`(`cpf`),
    UNIQUE INDEX `Pessoa_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cursoId` INTEGER NOT NULL,
    `pessoaId` INTEGER NOT NULL,
    `anoSemestreEntrada` VARCHAR(191) NOT NULL,
    `anoSemestreSaida` VARCHAR(191) NULL,

    UNIQUE INDEX `Matricula_cursoId_pessoaId_key`(`cursoId`, `pessoaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
