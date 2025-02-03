import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../core/models/task';
import { NgFor } from '@angular/common';
import { MyTasksController } from '../../core/controllers/my-tasks-controller';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss'
})

export class MyTasksComponent {
  taskForm: FormGroup;
  tasks: Task[] = []; // singleton
  editingTask: Task | null = null;

  constructor(private fb: FormBuilder, private myTaskController: MyTasksController) {
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }

  addTask() {
    if (this.taskForm.valid) {
      if (this.editingTask) {
        this.editingTask.data.title = this.taskForm.value.title;
        this.editingTask.data.description = this.taskForm.value.description;
        this.editingTask = null;
      } else {
   
        const newTask = new Task({
          id: Date.now(),
          title: this.taskForm.value.title,
          description: this.taskForm.value.description
        })
        this.tasks.push(newTask);
       const response =  this.myTaskController.addTask(newTask)
      }
      this.taskForm.reset();
    }
  }

  editTask(task: Task) {
    this.editingTask = task;
    const response =  this.myTaskController.editTask(task)
    if (response) {      
      this.taskForm.setValue({ title: response.title, description: response.description})
    }
  }

  deleteTask(taskId: number) {
    const response =  this.myTaskController.deleteTask(taskId)
   if (response) {
    console.log("Apagou");
    
   }
  }

}
