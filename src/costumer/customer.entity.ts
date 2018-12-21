import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm'

@Entity()
export class Customer {
    @PrimaryGeneratedColumn() customer_id: number
    @Column() store_id: number
    @Column() first_name: string
    @Column() last_name: string
    @Column() email: string
    @Column() address_id: number
    @Column() create_date: Date
    @Column() last_update: Date
    @Column() activebool: boolean
    @Column() active: number
}