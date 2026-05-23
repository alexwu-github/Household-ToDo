import { TasksController } from '../../src/tasks/tasks.controller';
import { TasksService } from '../../src/tasks/tasks.service';

describe('TasksController', () => {
  let tasksController: TasksController;
  let tasksService: TasksService;

  beforeEach(() => {
    tasksService = new TasksService();
    tasksController = new TasksController(tasksService);
  });

  describe('getAll', () => {
    it('should return an array of tasks', () => {
      const result = ['test'];
      jest.spyOn(tasksService, 'getAll').mockImplementation(() => result);

      expect(tasksController.getAll()).toBe(result);
    });
  });
});
