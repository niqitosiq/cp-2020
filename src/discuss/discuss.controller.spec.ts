import { Test, TestingModule } from '@nestjs/testing';
import { DiscussController } from './discuss.controller';

describe('Discuss Controller', () => {
  let controller: DiscussController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscussController],
    }).compile();

    controller = module.get<DiscussController>(DiscussController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
