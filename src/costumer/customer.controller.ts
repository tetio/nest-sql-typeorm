import { Controller, Get } from '@nestjs/common';
import { CustumerService } from './customer.service'
import { Address } from './address.entity'
import { Customer } from '../entity/customer.entity'
import { Rental } from '../entity/rental.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustumerService) { }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }

    @Get('/address')
    findAllAddresses(): Promise<Address[]> {
        return this.customerService.findAllAddresses()
    }

    @Get('/rental')
    findAllRentals(): Promise<Rental[]> {
        return this.customerService.findAllRentals()
    }    
}
