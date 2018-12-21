import { Controller, Get } from '@nestjs/common';
import {ActorService} from './actor.service'
import {Actor} from './entities/actor.entity'

@Controller('actor')
export class ActorController {
    constructor(private readonly autorService: ActorService) {}

    @Get()
    findAll(): Promise<Actor[]> {
        return this.autorService.findAll()
    }
}
