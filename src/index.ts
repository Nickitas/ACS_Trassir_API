import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log("Connected to the database.");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch(err => {
    console.error("An error occurred:", err);
});