import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Сategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

  @Input() categories!: Category[];
  @Output() selectCategory = new EventEmitter<Category>();
  selected?: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  showTasksByCategories(category: Category): void {

    if (category === this.selected) {
      return;
    }

    this.selected = category;
    // this.dataHandler.getTasksByCategories(category);
    this.selectCategory.emit(this.selected);
  }

}
