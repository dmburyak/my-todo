import { Injectable } from '@angular/core';
import {Category} from '../model/Сategory';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[] {
   return TestData.categories;
  }

}
