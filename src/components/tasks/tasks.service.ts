import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: "1",
            title: "First task",
            description: "First task description",
            status: TaskStatus.PENDING,
        }
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    createTask(title: string, description: string): Task {
        const task = {
            id: v4(),
            title: title,
            description: description,
            status: TaskStatus.PENDING,
        }
        this.tasks.push(task);

        return task;
    }
    updateTask(id: string) {

    }
    deleteTask(id: string) {

    }

}
