import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type PersonCreateParams = {
    data: {
        language: string,
        persons: {
            birth_date: Date,
            comment: string,
            folder_guid: string,
            gender: number,
            image: string,
            name: string,
            pacs: {
                access_levels: any[],
                associated_user: string,
                associated_user_from_cloud: boolean,
                attributes:any,
                card_ids: any,
                personnel_number: string,
                pincode: string,
                plates: string[],
                work_schedule_id: number
            }
        }[];
    }
}

type PersonCreateResponse = {

}

const newPerson = (data: PersonCreateParams): Promise<PersonCreateResponse> => {
    return prisma.person.create({
        data:  {
            birthDate: new Date("2020-01-01").getDate(),
            comment: "Comment",
            folder_guid: "persons",
            gender: 1,
            image: "",
            name: "New person",
            pacs: {
                access_levels: [],
                associated_user: "Admin",
                associated_user_from_cloud: false,
                attributes: {
                    "5": "Some value"
                },
                card_ids: [
                    "4",
                    "5"
                ],
                personnel_number: "1",
                pincode: "3",
                plates: [
                    "2",
                    "3"
                ],
                work_schedule_id: 0
            }
        }
        
    })
};

console.log(`new Person >>> ${newPerson}`);