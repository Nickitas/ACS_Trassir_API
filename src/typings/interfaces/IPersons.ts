import { genderEnum } from "../enums/genderEnum";
import { firTypeEnum } from "../enums/firTypeEnum";

/**
 * Интерфейс модели Персоны
 */
export interface IPersonInfoParams {
    // persons_t
    guid?: string;                                      // Уникальный идентфикатор
    name?: string | null;                               // Ф.И.О.
    birth_date?: Date | null;                           // Дата рождения
    gender?: genderEnum | null;                         // Пол
    contact_info?: string | null;                       // Номер телефона
    comment?: string | null;                            // Пометка
    folder_guid?: string | null;                        // Уникальный идентификатор директории
    image_guid?: Buffer | string | null;                // Уникальный идентификатор фотографии
    image_change_ts?: number | null;                    // Время крайнего изменения фотографии
    remote_server_guid?: string;                        // Уникальный идентификатор удаленного сервера
    deleted_ts?: number | null;                         // Время удаления
    external_system_id?: string;                        // Внешнее системмный идентификатор
    external_person_id?: string;                        // Внешний id персоны
    external_data_json?: string;                        // Внешние данные 
    external_image_guid?: string;                       // Внешний Уникальный иеднтификатор фото
    created_ts?: number | null;                         // Время создания
    last_modified_ts?: number | null;                   // Время последней модификации
    folder_guid_backup?: string | null;                 // Уникальный идентификатор директории резервного хранения
    
    // persons_images_t
    person_guid?: string;                               // Уникальный идентфикатор Персоны
    image?: Buffer | string | null;                     // Фотография
    thumbnail?: Buffer | string | null,                 // Фотография миниатюрная 

    // fr_matched_persons & fr_enrolled_persons_t
    fir_type?: firTypeEnum,                                  // Тип биометрического отпечатка
    fir?: Buffer | string | null,                       // Биометрический шаблон
    ts?: number | null,                                 // Время создания
}

export interface IPersonInfoResponse {
    guid: string;
    name: string | null;
    birth_date: Date | null;
    gender: genderEnum | null;
    contact_info: string | null;
    comment: string | null;
    folder_guid: string | null;
    image_guid: string | null;
    image_change_ts: number | null;
    remote_server_guid: string;
    modification_id?: number | null;                    // Икремент перезаписи
    deleted_ts: number | null;
    external_system_id: string;
    external_person_id: string;
    external_data_json: string;
    external_image_guid: string;
    created_ts: number | null;
    last_modified_ts: number | null;
    folder_guid_backup: string | null;
}