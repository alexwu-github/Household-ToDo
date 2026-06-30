import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-tasks.dto';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    getAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should call service.getAll and return its result', async () => {
      const mockTasks = [{ id: 'uuid-1', description: 'Buy milk' }] as Task[];
      mockTasksService.getAll.mockResolvedValue(mockTasks);

      const result = await controller.getAll();

      expect(mockTasksService.getAll).toHaveBeenCalled();
      expect(result).toEqual(mockTasks);
    });
  });

  describe('create', () => {
    it('should call service.create with the DTO and return a formatted message', async () => {
      const dto: CreateTaskDto = {
        description: 'Buy milk',
        authorId: 1,
        task_status: 2,
      };
      const mockTask = { id: 'uuid-123' } as Task;
      mockTasksService.create.mockResolvedValue(mockTask);

      const result = await controller.create(dto);

      expect(mockTasksService.create).toHaveBeenCalledWith(dto);
      expect(result).toBe('Task created with ID: uuid-123');
    });
  });
});
