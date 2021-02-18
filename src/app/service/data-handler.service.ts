import { Injectable } from '@angular/core';
import {Category} from '../model/Сategory';
import {Task} from '../model/Task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { }

  getTasksByCategories(category: Category): void {
    const tasks: Task[] = TestData.tasks.filter(task => {
      return task.category === category;
    });
    this.tasksSubject.next(tasks);
  }

}
