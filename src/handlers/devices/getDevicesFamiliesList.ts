import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * 
 * @returns 
 */
export const devicesFamiliesList  = async () => {
    const resulte = await prisma.persons_t.findMany({
        
    });

    console.log();
    console.log();
    return resulte;
};