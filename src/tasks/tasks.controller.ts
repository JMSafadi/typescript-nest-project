import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    return this.tasksService.getTasks()
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id))
  }
  @Get()
  index() {
    return 'Welcome to homepage.'
  }
  @Post()
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task)
  }
  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task)
  }
  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus()
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask()
  }
}
