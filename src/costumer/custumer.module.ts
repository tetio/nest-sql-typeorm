import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustumerController } from './custumer.controller';
import { CustumerService } from './custumer.service';
import {Address} from './address.entity'
import {Customer} from './customer.entity'
import { Rental } from './rental.entity';

@Module({imports: [TypeOrmModule.forFeature([Address, Customer, Rental])],
  controllers: [CustumerController],
  providers: [CustumerService]
})
export class CustumerModule {}
