import {CategoryDAO} from '../interface/CategoryDAO';
import {Category} from '../../../model/Сategory';
import {Observable} from 'rxjs';

export class CategoryDAOArray implements CategoryDAO {
  add(arg: Category): Observable<Category> {
    return undefined;
  }

  delete(id: number): Observable<Category> {
    return undefined;
  }

  get(id: number): Observable<Category> {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return undefined;
  }

  search(title: string): Observable<Category[]> {
    return undefined;
  }

  update(arg: Category): Observable<Category> {
    return undefined;
  }

}
