import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: Task){
        // this.tasksService.createTask("Hola","Description");
    }



}
