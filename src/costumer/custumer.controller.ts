import { Controller, Get } from '@nestjs/common';
import { CustumerService } from './custumer.service'
import { Address } from './address.entity'
import { Customer } from './customer.entity'

@Controller('customer')
export class CustumerController {
    constructor(private readonly customerService: CustumerService) { }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }
    
    @Get('/address')
    findAllAddresses(): Promise<Address[]> {
        return this.customerService.findAllAddresses()
    }
}
