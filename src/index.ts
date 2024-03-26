import { PrismaClient } from "@prisma/client";
import { devicesFamiliesList } from "./handlers/devices/getDevicesFamiliesList";
import { 
    createOnePerson,
    createManyPersons,

    getPersonInfoByUniqueValue,
    getAllPersonsInfo,

    getEventsLogsLast,
    getEventsLogsOfTimeInterval,
    getEventsLogsByCardKey,

} from "./handlers";
import { personsList } from "../data_to_uppload";


const prisma = new PrismaClient();


async function main() {
    try {
        console.time('>>> connect time');
        await prisma.$connect();
        console.log(`Database connection established.`);
        console.timeEnd('>>> connect time');
        console.time('>>> query time');


        //#region DEVICES
        // devicesFamiliesList().then(e => console.log(e));
        //#endregion DEVICES
        


        //#region PERSON_T
        // createOnePerson(
        //     personsList[0]
        // ).catch(err => console.log(err));
        
        createManyPersons({ personsData:
            personsList
        }).catch(err => console.log(err));

        // getPersonInfoByUniqueValue({ 
        //     guid: 'daadf351-17f9-4cb2-9855-2445e88c8043' 
        // }).catch(err => console.error(err));
        // getAllPersonsInfo({ folder_guid: 'persons', name: 'Карточка 5' }).catch(err => console.log(err));
        //#endregion PERSON_T
        

        
        //#region EVENTS_LOGS
        // getEventsLogsLast().catch(err => console.log(err));
        // getEventsLogsOfTimeInterval({ t0: '2024-03-01', t1: '2024-03-12' }).catch(err => console.log(err));
        // getEventsLogsByCardKey({ cardKey: '24301123', t: '2011-10-10' }).catch(err => console.log(err));
        //#endregion EVENTS_LOGS

        console.timeEnd('>>> query time');
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch(err => {
    console.error(`An error occurred: ${err}`);
});