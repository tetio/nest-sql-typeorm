import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustumerService } from './customer.service';
import {Address} from '../entity/address.entity'
import {Customer} from '../entity/customer.entity'
import { Rental } from '../entity/rental.entity';
import { RentalController } from './rental.controller';

@Module({imports: [TypeOrmModule.forFeature([Address, Customer, Rental])],
  controllers: [CustomerController, RentalController],
  providers: [CustumerService]
})
export class CustumerModule {}
