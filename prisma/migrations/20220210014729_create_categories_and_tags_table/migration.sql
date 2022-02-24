/*
  Warnings:

  - A unique constraint covering the columns `[fileMdx]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fileMdx]` on the table `subProjects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileMdx` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileMdx` to the `subProjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects` ADD COLUMN `fileMdx` VARCHAR(150) NOT NULL;

-- AlterTable
ALTER TABLE `subProjects` ADD COLUMN `fileMdx` VARCHAR(150) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `projects_fileMdx_key` ON `projects`(`fileMdx`);

-- CreateIndex
CREATE UNIQUE INDEX `subProjects_fileMdx_key` ON `subProjects`(`fileMdx`);
