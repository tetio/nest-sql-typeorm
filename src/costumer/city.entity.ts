import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

//@Entity()
export class City {
    @PrimaryGeneratedColumn() city_id: number
    @Column() city: string
    @Column() country_id: string
    @Column() last_update: Date
}