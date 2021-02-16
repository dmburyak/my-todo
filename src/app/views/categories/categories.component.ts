import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Сategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

}