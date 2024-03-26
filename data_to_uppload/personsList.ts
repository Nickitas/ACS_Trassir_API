/** personsList format
 *  name: string - Фамилия Имя Отчество 
    birth_date: string - Дата рождения
    gender: 1 number - Пол : 1 - муж, 2 - жен, 0 не опред
    external_system_id: string - ИНН (таб. номер)
    contact_info: string - Название кафедры
    image: string - название фотографии (начинать с ./img/<external_system_id>.jpg)
    comment: string - Комментарий
 */
export const personsList = [
    {
        name: 'ФИО',                                
        birth_date: new Date('2011-10-10'),        
        gender: 1,                                 
        external_system_id: '',                    
        contact_info: '',                           
        image: './img/<external_system_id>.jpg',    
        comment: '',                         
    },

]