import {TaskDAO} from '../interface/TaskDAO';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Сategory';
import {Priority} from '../../../model/Priority';
import {Task} from '../../../model/Task';
import {TestData} from '../../TestData';

export class TaskDAOArray implements TaskDAO {
  add(arg: Task): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    return undefined;
  }

  get(id: number): Observable<Task> {
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  search(category: Category, priority: Priority, searchText: string, status: boolean): Observable<Task[]> {
    return undefined;
  }

  update(arg: Task): Observable<Task> {
    return undefined;
  }

}
