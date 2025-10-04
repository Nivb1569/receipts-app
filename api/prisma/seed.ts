import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await prisma.customer.createMany({
    data: [
      { name: "Niv Baumel", address: "Herzel 5, Tel Aviv"},
      { name: "John Doe", address: "123 Main St, Springfield" },
      { name: "Jane Smith", address: "456 Elm St, Metropolis" },
    ],
    });
  await prisma.product.createMany({
    data: [
      { name: "Laptop"},
      { name: "Smartphone"},
      { name: "Tablet"},
    ],
  });
  await prisma.customerProduct.createMany({
    data : [
      { customerId: 1, productId: 1 , price : 3000},
      { customerId: 2, productId: 1 , price : 1500},
      ],
    });
}

seed().then(() => prisma.$disconnect());