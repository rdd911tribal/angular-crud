import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
})
export class EmployeeViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  model?: EmployeeModel;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.employeeService.get(id).subscribe((response) => {
        this.model = response;
        console.log(response);
      });
    }
  }
}
