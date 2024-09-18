import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateTaskDto } from "./dto/create-task.dto"
import { UpdateTaskDto } from "./dto/update-task.dto"

export interface Task {
  id: number,
  name: string,
  status: boolean
}

@Injectable()
export class TasksService {
  private tasks = []

  getTasks() {
    return this.tasks
  }
  getTask(id: number) {
    const taskResult = this.tasks.find(task => task.id === id)
    if (!taskResult) {
      return new NotFoundException(`Task with ${id} not found`)
    }
    return taskResult
  }
  index() {
    return 'Welcome to homepage.'
  }
  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    })
    return task
  }
  updateTask(task: UpdateTaskDto) {
    return 'Updating tasks'
  }
  updateTaskStatus() {
    return 'Updating task status'
  }
  deleteTask() {
    return 'Deleting task'
  }
}
