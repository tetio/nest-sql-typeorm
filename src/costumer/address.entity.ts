import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Address {
    @PrimaryGeneratedColumn() address_id: number
    @Column() address: string
    @Column({nullable: true}) address2: string
    @Column() district: string
    @Column() city_id: number
    @Column({nullable: true}) postal_code: string
    @Column() phone: string
    @Column() last_update: Date
}