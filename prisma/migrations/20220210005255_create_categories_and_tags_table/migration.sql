-- AlterTable
ALTER TABLE `subProjects` ADD COLUMN `projectId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `subProjects` ADD CONSTRAINT `subProjects_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
