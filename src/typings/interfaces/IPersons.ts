import { genderEnum } from "../enums/genderEnum";

export interface IPersonInfoParams {
    guid?: string;
    name?: string | null;
    birth_date?: Date | null;
    gender?: genderEnum | null;
    contact_info?: string | null;
    comment?: string | null;
    folder_guid?: string | null;
    image_guid?: string | null;
    image_change_ts?: number | null;
    remote_server_guid?: string;
    modification_id?: number | null;
    deleted_ts?: number | null;
    external_system_id?: string;
    external_person_id?: string;
    external_data_json?: string;
    external_image_guid?: string;
    created_ts?: number | null;
    last_modified_ts?: number | null;
    folder_guid_backup?: string | null;
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
    modification_id: number | null;
    deleted_ts: number | null;
    external_system_id: string;
    external_person_id: string;
    external_data_json: string;
    external_image_guid: string;
    created_ts: number | null;
    last_modified_ts: number | null;
    folder_guid_backup: string | null;
}