import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  model = new EmployeeModel();

  constructor(private router: Router, private service: EmployeeService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('onSubmit: payload', this.model);
    this.service.add(this.model).subscribe((response) => {
      console.log('onSubmit response:', response);

      // when successful
      this.router.navigate(['employees']);
    });
  }
}
