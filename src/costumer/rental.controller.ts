import { Controller, Get, Param } from '@nestjs/common';
import { CustumerService } from './customer.service'
import { Rental } from '../entity/rental.entity';
import { publish, RENTALS } from '../queue.utils';

@Controller('rental')
export class RentalController {
    constructor(private readonly customerService: CustumerService) { }

    @Get('/:id')
    findAllRentals(@Param('id') id: number): Promise<Rental[]> {
         return this.customerService.findAllRentals(id)
    }    

    @Get('/publish/:id')
    publishRental(@Param('id') id: number): string {
         this.customerService.findAllRentals(id)
         .then((rentals) => {
             rentals.map((rental) => publish(RENTALS, JSON.stringify(rental)))
             return 'OK'
         })
         .catch((error) => {
             return '' + error
         })
         return ''
    } 
 
}