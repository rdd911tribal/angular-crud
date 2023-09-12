import { Component, OnInit } from '@angular/core';
import { DepartmentsModule } from '../../departments.module';
import { DepartmentsService } from '../../services/departments.service';
import { DepartmentModel } from '../../models/departmets.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
})
export class DepartmentsListComponent implements OnInit {
  list: DepartmentModel[] = [];
  constructor(private service: DepartmentsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.search().subscribe((response) => {
      this.list = response;
      console.log('ngOnInit: ', response);
    });
  }

  onDelete(id: number): void {
    console.log('onDelete payload: ', id);
    this.service.delete(id).subscribe((response) => {
      console.log('onDelete response:, ', response);
      this.loadData();
    });
  }
}
