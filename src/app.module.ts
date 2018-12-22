import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { ActorModule } from './actor/actor.module';
import { CustumerModule } from './costumer/customer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, ActorModule, CustumerModule],
})
export class ApplicationModule {}
