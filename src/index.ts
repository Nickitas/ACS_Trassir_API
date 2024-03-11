import { PrismaClient } from "@prisma/client";
import { devicesFamiliesList } from "./handlers/devices/getDevicesFamiliesList";
import { 
    createOnePerson,
    createManyPersons,
<<<<<<< HEAD

=======
>>>>>>> 5f66d0551412a4824d6ab1db847fe333ccf55120
    getPersonInfoByUniqueValue,
    getAllPersonsInfo,

    getEventsLogsLast,
    getEventsLogsOfTimeInterval,
    getEventsLogsByCardKey,

} from "./handlers";
const prisma = new PrismaClient();


async function main() {
    try {
        console.time('>>> connect time');
        await prisma.$connect();
        console.log(`Database connection established.`);
        console.timeEnd('>>> connect time');
        console.time('>>> query time');


<<<<<<< HEAD
=======
        // devicesFamiliesList().then(e => console.log(e));
        
        //#region person_t
        // createOnePerson({
        //     name: 'A', 
        //     birth_date: new Date('2011-10-10'),
        //     gender: 1, 
        //     contact_info: '', 
        //     image: '../../../img/pic2.png',
        //     comment: '', 
        // }).catch(err => console.log(err));
        createManyPersons({personsData: [
            {
                name: 'Б', 
                birth_date: new Date('2011-10-10'),
                gender: 1, 
                contact_info: '', 
                image: '../../../img/pic3.png',
                comment: '', 
            },
            {
                name: 'И', 
                birth_date: new Date('2011-10-10'),
                gender: 1, 
                contact_info: '', 
                image: '../../../img/pic4.png',
                comment: '', 
            }
        ]}).catch(err => console.log(err));

        createOnePerson({
            name: 'A', 
            birth_date: new Date('2011-10-10'),
            gender: 1, 
            contact_info: '', 
            image: '../../../img/pic1.png',
            comment: '', 
        }).catch(err => console.log(err));
        // getPersonInfoByUniqueValue({ 
        //     guid: 'daadf351-17f9-4cb2-9855-2445e88c8043' 
        // }).catch(err => console.error(err));
        // getAllPersonsInfo({ folder_guid: 'persons', name: 'Карточка 5' }).catch(err => console.log(err));
>>>>>>> 5f66d0551412a4824d6ab1db847fe333ccf55120

        //#region DEVICES
        // devicesFamiliesList().then(e => console.log(e));
        //#endregion DEVICES

        //#region PERSONS_T
        // createOnePerson({
        //     name: 'A', 
        //     birth_date: new Date('2011-10-10'),
        //     gender: 1, 
        //     external_system_id: '',
        //     contact_info: '', 
        //     image: '../../../img/pic2.png',
        //     comment: '', 
        // }).catch(err => console.log(err));
        // createManyPersons({personsData: [
        //     {
        //         name: 'Б', 
        //         birth_date: new Date('2011-10-10'),
        //         gender: 1, 
        //         external_system_id: '',
        //         contact_info: '', 
        //         image: '../../../img/pic3.png',
        //         comment: '', 
        //     },
        //     {
        //         name: 'И', 
        //         birth_date: new Date('2011-10-10'),
        //         gender: 1, 
        //         external_system_id: '',
        //         contact_info: '', 
        //         image: '../../../img/pic4.png',
        //         comment: '', 
        //     }
        // ]}).catch(err => console.log(err));
        // getPersonInfoByUniqueValue({ 
        //     guid: 'daadf351-17f9-4cb2-9855-2445e88c8043' 
        // }).catch(err => console.error(err));
        // getAllPersonsInfo({ folder_guid: 'persons', name: 'Карточка 5' }).catch(err => console.log(err));
        //#endregion PERSONS_T

        //#region EVENTS_LOGS
        getEventsLogsLast().catch(err => console.log(err));
        getEventsLogsOfTimeInterval({ t0: 0, t1: 1 }).catch(err => console.log(err));
        getEventsLogsByCardKey({ cardKey: '12312312312', t: 0 }).catch(err => console.log(err));
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