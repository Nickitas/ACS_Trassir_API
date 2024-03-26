/**
 * Интерфейс модели Событий проходов
 */
export interface IEventLog {
    id: number,
    event_type: number,
    ts: number,
    origin: string,
    p1: string,
    p2: string,
    p3: string,
    flags: number,
}