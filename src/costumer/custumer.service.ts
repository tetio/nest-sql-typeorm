import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity'
import {Customer} from './customer.entity'

@Injectable()
export class CustumerService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>
    ) { }

    async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find()
    }

    async findAllAddresses(): Promise<Address[]> {
        return await this.addressRepository.find()
    }
}
