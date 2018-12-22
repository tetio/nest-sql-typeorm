import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity'
import { Customer } from './customer.entity'
import { Rental } from './rental.entity';

@Injectable()
export class CustumerService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Rental)
        private readonly rentalRepository: Repository<Rental>
    ) { }

    async findAll(): Promise<Customer[]> {
        return await this.customerRepository
            .createQueryBuilder('customer')
            .leftJoinAndSelect("customer.address", "address")
            .leftJoinAndSelect("address.city", "city")
            .leftJoinAndSelect("city.country", "country")
            .getMany()
    }

    async findAllRentals(id: number = 409): Promise<Rental[]> {
        return await this.rentalRepository
            .createQueryBuilder('rental')
            .where('rental.customer_id = :id',{id: id})
            .leftJoinAndSelect('rental.inventory', 'inventory')
            .leftJoinAndSelect("inventory.film", "film")
            .leftJoinAndSelect("rental.customer", "customer")
            .leftJoinAndSelect("customer.address", "address")
            .getMany()
    }

    async findAllAddresses(): Promise<Address[]> {
        return await this.addressRepository.find()
    }
}
