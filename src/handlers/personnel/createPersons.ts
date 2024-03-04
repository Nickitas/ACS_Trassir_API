import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { IPersonInfoParams, IPersonInfoResponse } from "../../typings/interfaces/IPersons";

const prisma = new PrismaClient();


export const createOnePerson = async ({
    name,
    birth_date,
    gender,
    contact_info,
    comment,
    remote_server_guid,
    external_system_id,
    external_person_id,
    external_data_json,
    external_image_guid,
    created_ts,
    last_modified_ts,
}: IPersonInfoParams) => {
    const uuid = uuidv4();
    const newPerson = await prisma.fr_enrolled_persons_t.create({
        data: {
            person_guid: uuid,
            fir_type: Math.floor(Math.random() * 40),
            fir: Buffer.from(uuid),
            ts: new Date().getTime(),
            remote_server_guid: '',
            deleted_ts: null,
        }
    });

    return await prisma.persons_t.create({
        data: {
            guid: newPerson.person_guid,
            name: name,
            birth_date: birth_date,
            gender: null,
            contact_info: null,
            comment: null,
            folder_guid: null,
            image_guid: null,
            image_change_ts: null,
            remote_server_guid: '',
            deleted_ts: null,
            external_system_id: '',
            external_person_id: '',
            external_data_json: '',
            external_image_guid: '',
            created_ts: newPerson.ts,
            last_modified_ts: newPerson.ts,
            folder_guid_backup: null,
        }
    });
}

// export const createManyPersons = async () => {
//     const uuid = uuidv4();
//     const persons = await prisma.persons_t.createMany({
//         data: [
//             {
//                 guid: persons
//                 name: 'Person 1',

//             },
//             {

//             }
//         ]
//     })
// }