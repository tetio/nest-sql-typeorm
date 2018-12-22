import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustumerService } from './customer.service';
import {Address} from './address.entity'
import {Customer} from './customer.entity'
import { Rental } from './rental.entity';
import { RentalController } from './rental.controller';

@Module({imports: [TypeOrmModule.forFeature([Address, Customer, Rental])],
  controllers: [CustomerController, RentalController],
  providers: [CustumerService]
})
export class CustumerModule {}
