import prisma from "./lib/prisma.js";

async function testConnection() {
  try {
    const tasks = await prisma.task.findMany();
    console.log("Database connection successful. Tasks:", tasks);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
