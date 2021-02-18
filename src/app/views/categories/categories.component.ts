import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Сategory';
import {Task} from "../../model/Task";
import {Subject} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.categorySubject.subscribe(category => this.categories = category);
  }

  showTasksByCategories(category: Category): void {
    this.dataHandler.getTasksByCategories(category);
  }

}
