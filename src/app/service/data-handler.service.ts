import { Injectable } from '@angular/core';
import {Category} from '../model/Сategory';
import {Task} from '../model/Task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TaskDAOArray} from '../data/dao/impl/TaskDAOArray';
import {CategoryDAOArray} from '../data/dao/impl/CategoryDAOArray';
import {Priority} from '../model/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  private taskDAOArray = new TaskDAOArray();
  private categoryDAOArray = new CategoryDAOArray();

  constructor() { }

  // getTasksByCategories(category: Category): Observable<Category[]> {
  // }

  searchTasks(category: Category | null, priority: Priority | null, searchText: string | null, status: boolean | null): Observable<Task[]> {
    return this.taskDAOArray.search(category, priority, searchText, status);
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDAOArray.getAll();
  }

}
