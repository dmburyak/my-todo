import {TaskDAO} from '../interface/TaskDAO';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Сategory';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';

export class TaskDAOArray implements TaskDAO {

  add(arg: Task): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  delete(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  get(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCount(): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  private searchTasks(category: Category | null, priority: Priority | null, searchText: string | null, status: boolean | null): Task[] {
    let allTasks = TestData.tasks;
    if (category !== null) {
      allTasks = TestData.tasks.filter(task => task.category === category);
    }
    return allTasks;
  }

  search(category: Category | null, priority: Priority | null, searchText: string | null, status: boolean | null): Observable<Task[]> {
    return of(this.searchTasks(category, priority, searchText, status));
  }

  update(arg: Task): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

}
