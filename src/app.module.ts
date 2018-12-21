import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { ActorModule } from './actor/actor.module';
import { CostumerModule } from './costumer/costumer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, ActorModule, CostumerModule]
})
export class ApplicationModule {}
