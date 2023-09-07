export type TGender = 'м' | 'ж' //TGender - тип. Тип пол может принимать только два этих значения

export interface IUser {   //IUser - интерфейс. Структура нашего пользователя
    name: string
    secondName: string
    gender: TGender
    age: number
    rank: number
 } 
 
 export type TArrayOfUsers = IUser[] // массив пользователей

 