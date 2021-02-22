import { Injectable } from '@angular/core';
import {Category} from '../model/Сategory';
import {Task} from '../model/Task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  taskDAOArray = new TaskDAOArray();

  constructor() { }

  getTasksByCategories(category: Category): void {
    const tasks: Task[] = TestData.tasks.filter(task => {
      return task.category === category;
    });
    this.tasksSubject.next(tasks);
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOArray.getAll();
  }

}
