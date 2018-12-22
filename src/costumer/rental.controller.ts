import { Controller, Get, Param } from '@nestjs/common';
import { CustumerService } from './customer.service'
import { Rental } from '../entity/rental.entity';

@Controller('rental')
export class RentalController {
    constructor(private readonly customerService: CustumerService) { }

    @Get('/:id')
    findAllRentals(@Param('id') id: number): Promise<Rental[]> {
        return this.customerService.findAllRentals(id)
    }    
}