import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustumerController } from './custumer.controller';
import { CustumerService } from './custumer.service';
import {Address} from './address.entity'
import {Customer} from './customer.entity'

@Module({imports: [TypeOrmModule.forFeature([Address, Customer])],
  controllers: [CustumerController],
  providers: [CustumerService]
})
export class CustumerModule {}
