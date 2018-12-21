import { Test, TestingModule } from '@nestjs/testing';
import { CostumerController } from './costumer.controller';

describe('Costumer Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CostumerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CostumerController = module.get<CostumerController>(CostumerController);
    expect(controller).toBeDefined();
  });
});
