import { Test, TestingModule } from '@nestjs/testing';
import { ActorController } from './actor.controller';

describe('Actor Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ActorController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ActorController = module.get<ActorController>(ActorController);
    expect(controller).toBeDefined();
  });
});
