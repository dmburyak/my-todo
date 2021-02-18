import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Сategory';
import {Task} from "../../model/Task";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;
  tasks?: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

  showTasksByCategories(category: Category): Task[] {
    this.tasks = this.dataHandler.getTasks().filter(task => {
      return task.category === category;
    });
    console.log(this.tasks);
    return this.tasks;
  }
}
