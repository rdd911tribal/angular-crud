import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  list: EmployeeModel[] = [];

  constructor(private service: EmployeeService) {}

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
