/**
 * Интерфейс модели Устройства
 */
export interface IDevicesParams {
    family?: string,                    // Семейство устройств
    ip_address?: string,                // IP-адресс
    login?: string,                     // Логин
    name?: string,                      // Название 
    password?: string,                  // Пароль
    port?: number,                      // Порт
}

export interface IDevicesResponse {

}