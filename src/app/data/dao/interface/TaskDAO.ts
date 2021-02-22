import {CommonDAO} from './CommonDAO';
import {Task} from '../../../model/Task';
import {Category} from '../../../model/Сategory';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';

export interface TaskDAO extends CommonDAO<Task> {

  search(category: Category, priority: Priority, searchText: string, status: boolean): Observable<Task[]>;

  getCompletedCountInCategory(category: Category): Observable<number>;

  getUncompletedCountInCategory(category: Category): Observable<number>;

  getTotalCountInCategory(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;
}
