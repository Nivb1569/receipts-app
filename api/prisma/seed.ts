import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await prisma.customer.createMany({
    data: [
      { name: "Niv Baumel", address: "Herzel 5, Tel Aviv" },
      { name: "John Doe", address: "123 Main St, Springfield" },
      { name: "Jane Smith", address: "456 Elm St, Metropolis" },
    ],
    });
}

seed().then(() => prisma.$disconnect());