import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity'

@Injectable()
export class CostumerService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>
    ) { }

    async findAllAddresses(): Promise<Address[]> {
        return await this.addressRepository.find()
    }
}
