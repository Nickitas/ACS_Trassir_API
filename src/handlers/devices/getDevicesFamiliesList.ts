import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


interface IDevicesFamiliesListResponse {

}


export const devicesFamiliesList  = async (): Promise<IDevicesFamiliesListResponse> => {
    return await prisma.persons_t.findMany({});
};