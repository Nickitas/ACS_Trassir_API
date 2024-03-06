import { PrismaClient } from "@prisma/client";
import { IPersonInfoParams } from "../../typings/interfaces/IPersons";

const prisma = new PrismaClient();

/**
 * Получение уникальной PERSON из таблицы person_t.
 * @param obj type object : пустой объект для выгрузки всех; или указание перечисления интересующих полей по указанному значению.
 * @returns type array of Persons Objects.
 */
export const getPersonInfoByUniqueValue = async ({
    guid,
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
    
    const where: Record<string, any> = {
        guid,
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
    };

    Object.keys(where).forEach(key => {
        if (typeof where[key] === 'undefined') {
            delete where[key];
        }
    });
    
    const result = await prisma.persons_t.findUnique({
        where: {
            guid: guid,
            name: name,
            birth_date: birth_date,
            gender: gender,
            contact_info: contact_info,
            comment: comment,
            remote_server_guid: remote_server_guid,
            external_system_id: external_system_id,
            external_person_id: external_person_id,
            external_data_json: external_data_json,
            external_image_guid: external_image_guid,
            created_ts: created_ts,
            last_modified_ts: last_modified_ts,
        },
        select: {
            guid: true,
            name: true,
            birth_date: true,
            gender: true,
            contact_info: true,
            comment: true,
            folder_guid: true,
            image_guid: true,
            image_change_ts: true,
            remote_server_guid: true,
            deleted_ts: true,
            external_system_id: true,
            external_person_id: true,
            external_data_json: true,
            external_image_guid: true,
            created_ts: true,
            last_modified_ts: true,
            folder_guid_backup: true
        },
    });

    console.log(`>>> the find PERSON is:`);
    console.log(result);
    return result;
}

/**
 * Получение всех PERSONS из таблицы person_t.
 * @param obj type object : пустой для выгрузки всех, или указание перечисления интересующих полей по указанному значению.
 * @returns type array of PERSONS Objects.
 */
export const getAllPersonsInfo = async ({
    guid,
    name,
    birth_date,
    gender,
    contact_info,
    comment,
    folder_guid,
    image_guid,
    image_change_ts,
    remote_server_guid,
    modification_id,
    deleted_ts,
    external_system_id,
    external_person_id,
    external_data_json,
    external_image_guid,
    created_ts,
    last_modified_ts,
}: IPersonInfoParams) => {
    
    if (Object.keys.length === 0) {
        return await prisma.persons_t.findMany();
    } else {
        const where: Record<string, any> = {
            guid,
            name,
            birth_date,
            gender,
            contact_info,
            comment,
            folder_guid,
            image_guid,
            image_change_ts,
            remote_server_guid,
            modification_id,
            deleted_ts,
            external_system_id,
            external_person_id,
            external_data_json,
            external_image_guid,
            created_ts,
            last_modified_ts,
        };

        Object.keys(where).forEach(key => {
            if (typeof where[key] === 'undefined') {
                delete where[key];
            }
        });

        const result = await prisma.persons_t.findMany({
            where,
        });

        console.log(`>>> the find PERSONS are:`);
        console.log(result);
        return result;
    }
}