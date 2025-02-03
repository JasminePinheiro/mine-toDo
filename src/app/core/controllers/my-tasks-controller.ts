import { Task } from "../models/task";

export class MyTasksController {
    addTask(task: Task): Task | null {
        return task
    }
    editTask(task: Task): Task | null {
        return task
    }
    deleteTask(id: number): boolean {
        return true
    }
}