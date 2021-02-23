import {Component, OnInit} from '@angular/core';
import {Task} from './model/Task';
import {DataHandlerService} from './service/data-handler.service';
import {Category} from './model/Сategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  tasks!: Task[];
  categories!: Category[];
  selectedCategory!: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {

    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(category => this.categories = category);

  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
    this.dataHandler.searchTasks(this.selectedCategory, null, null, null)
      .subscribe(tasks => this.tasks = tasks);
  }

  onUpdateTask(task: Task): void {
    console.log(task);
  }
}
