import { PrismaClient } from "@prisma/client";
import { generateUniqueGuid, generateGuidFromString } from "../../../utils";
import { IPersonInfoParams, IPersonInfoResponse } from "../../typings/interfaces/IPersons";

const prisma = new PrismaClient();

/**
 * Создание записи Таблицы person_t.
 * @param name type string : Имя Персоны ;
 * @param birth_date type Data TS : Дата рождения Персоны ;
 * @param gender type genderEnum : Пол Персоны ;
 * @param contact_info type string : Контактная информация Персоны ;
 * @param image type Bytes : Фото Персоны ;
 * @param comment type string : Комментарий Персоны ;
 * @returns console log of result.
 */
export const createOnePerson = async ({
    name,
    birth_date,
    gender,
    external_system_id,
    contact_info,
    image,
    comment,
}: IPersonInfoParams) => {
    const uuid = generateUniqueGuid();
    const nowTimeTs = new Date().getTime();
    const personImgGuid = generateGuidFromString(`${image}`);
    const imgBytes = Buffer.from(image!);
    const remoteServerGuid = generateGuidFromString(process.env.DATABASE_URL!.split('@')[1].split('/')[0]);
    
    const newPerson = await prisma.fr_enrolled_persons_t.create({
        data: {
            person_guid: uuid,
            fir_type: Math.floor(Math.random() * 40),
            fir: Buffer.from(uuid),
            ts: nowTimeTs,
            remote_server_guid: remoteServerGuid,
            deleted_ts: null,
        }
    });

    const newFrMatchedPerson = await prisma.fr_matched_persons.create({
        data: {
            person_guid: newPerson.person_guid,
            name: name,
            birth_date: birth_date,
            gender: gender,
            contact_info: contact_info,
            comment: comment,
            folder_guid: null,
            thumbnail: null,
            ts: newPerson.ts,
        }
    });
    
    const newPersonImg = await prisma.persons_images_t.create({
        data: {
            person_guid: newFrMatchedPerson.person_guid,
            image_guid: personImgGuid,
            image: imgBytes,
            thumbnail: newFrMatchedPerson.thumbnail,
            remote_server_guid: remoteServerGuid,
            deleted_ts: null,
            created_ts: newFrMatchedPerson.ts,
        }
    });
    
    const result = await prisma.persons_t.create({
        data: {
            guid: newPerson.person_guid,
            name: newFrMatchedPerson.name,
            birth_date: newFrMatchedPerson.birth_date,
            gender: newFrMatchedPerson.gender,
            contact_info: newFrMatchedPerson.contact_info,
            comment: newFrMatchedPerson.comment,
            folder_guid: newFrMatchedPerson.folder_guid,
            image_guid: newPersonImg.image_guid,
            image_change_ts: newPersonImg.created_ts,
            remote_server_guid: newPerson.remote_server_guid,
            deleted_ts: null,
            external_system_id: external_system_id,
            external_person_id: '',
            external_data_json: '',
            external_image_guid: '',
            created_ts: newPerson.ts,
            last_modified_ts: newPerson.ts,
            folder_guid_backup: null,
        }
    });

    console.log('>>> create one new PERSON :');
    console.log(result);
    return result;
}

/**
 * Создание сразу нескольких записей Таблицы person_t.
 * @param personsData type array : Массив объектов данных Персоны ;
 * @returns console log of results.
 */
export const createManyPersons = async ({ personsData }: {  personsData: Array<IPersonInfoParams> }) => {
    const results = [];
    let personsCount = 0;

    for (const item of personsData) {
        const newPerson = await createOnePerson(item);
        results.push(newPerson);
        personsCount = personsCount + 1;
    }

    console.log(`>>> create ${personsCount} new PERSONs :`);
    console.log(results);
    return results;
}