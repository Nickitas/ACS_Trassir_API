import { PrismaClient } from ".prisma/client";
import { orderEnum } from "../../typings";

const prisma = new PrismaClient();

/**
 * Получение всего EVENTS LOG или указанного количетсва (c конца) с возможностью сортировки.
 * @param numRecords type number : количество крайних записей (если не указано, то все записи).
 * @param order type orderEnum : порядк сортиовки.
 * @returns list of logs.
 */
export const getEventsLogsLast = async (numRecords?: number, order?: orderEnum) => {
    const orderBy = order === orderEnum.byDesc ? 'desc' : 'asc';

    let queryOptions: {
        orderBy: {
            ts: 'asc' | 'desc';
        };
        take?: number;
    } = {
        orderBy: {
            ts: orderBy,
        },
    };

    if (numRecords) {
        queryOptions.take = numRecords;
    }

    const result = await prisma.event_log.findMany(queryOptions);

    console.log(`>>> the find Events Logs are:`);
    console.log(result);
    return result;
}

/**
 * Получение EVENTS LOG за указанный интервал времени.
 * @param t0 type number : начальное время.
 * @param t1 type number : конечное время.
 */
export const getEventsLogsOfTimeInterval = async ({ t0, t1 }: { t0: string, t1: string }) => {
    let _t0 = new Date(t0).getTime();
    let _t1 = new Date(t1).getTime();
    
    if (_t1 < _t0) {
        [_t0, _t1] = [_t1, _t0];
    }

    const result = await prisma.event_log.findMany({
        where: {
            ts: {
                gte: _t0, // больше или равно t0
                lte: _t1, // меньше или равно t1
            },
        },
    });

    console.log(_t0, ' | ', _t1);
    console.log(`>>> the find Events Logs for time interval ${t0} - ${t1} are:`);
    console.log(result);
    return result;
}

/**
 * Получение EVENTS LOG по уникальному ключу от интересующей даты.
 * @param cardKey type string : код ключа доступа персоны.
 * @param t type number : начальная дата поиска.
 */
export const getEventsLogsByCardKey = async ({ cardKey, t }: {cardKey: string, t: string }) => {
    
    const _t = new Date(t).getDate();

    let queryOptions: any = {
        where: {
            cardKey: cardKey,
        },
    };

    if (t) {
        queryOptions.where.ts = {
            gte: _t,
        };
    }

    const result = await prisma.event_log.findMany(queryOptions);

    console.log(`>>> the find Events Logs for card key ${cardKey} starting from time ${t} are:`);
    console.log(result);
    return result;
}