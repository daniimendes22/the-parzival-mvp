import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const fs = require("fs");
  const example = fs.readFileSync(
    `${process.cwd()}/src/pages/api/dbAPI/projects.json`,
    "utf8"
  );
  JSON.parse(example).forEach(async (element) => {
    await prisma.projects.create({
      data: {
        name: element.name,
        fileMdx: element.fileMdx,
      },
    });
  });

  return res;
}
