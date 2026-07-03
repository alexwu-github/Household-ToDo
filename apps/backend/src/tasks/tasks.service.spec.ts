import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-tasks.dto';

describe('TasksService', () => {
  const mockTaskRepository = {
    query: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  let service: TasksService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new TasksService(mockTaskRepository as any);
  });

  describe('getAll', () => {
    it('should query all tasks', async () => {
      const mockTasks = [{ id: 'uuid-1', description: 'Buy milk' }] as Task[];
      mockTaskRepository.query.mockResolvedValue(mockTasks);

      const result = await service.getAll();

      expect(mockTaskRepository.query).toHaveBeenCalledWith(
        'SELECT * FROM task',
      );
      expect(result).toEqual(mockTasks);
    });
  });

  describe('create', () => {
    it('should create and save a task', async () => {
      const dto: CreateTaskDto = {
        description: 'Buy milk',
        authorId: 1,
        task_status: 2,
      };
      const mockTask = { id: 'uuid-123', description: 'Buy milk' } as Task;

      mockTaskRepository.create.mockReturnValue(mockTask);
      mockTaskRepository.save.mockResolvedValue(mockTask);

      const result = await service.create(dto);

      expect(mockTaskRepository.create).toHaveBeenCalledWith({
        description: dto.description,
        author: { id: dto.authorId },
        status: { id: dto.task_status },
      });
      expect(mockTaskRepository.save).toHaveBeenCalledWith(mockTask);
      expect(result).toEqual(mockTask);
    });
  });
});
