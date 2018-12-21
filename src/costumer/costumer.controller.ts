import { Controller, Get } from '@nestjs/common';
import {CostumerService} from './costumer.service'
import {Address} from './address.entity'

@Controller('costumer')
export class CostumerController {
    constructor(private readonly customerService: CostumerService) {}

    @Get('/address')
    findAll(): Promise<Address[]> {
        return this.customerService.findAllAddresses()
    }
}
