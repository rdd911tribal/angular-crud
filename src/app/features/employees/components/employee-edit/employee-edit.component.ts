import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  model: EmployeeModel = new EmployeeModel();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EmployeeService
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.params['id'];
    this.service.get(paramId).subscribe((response) => {
      this.model = response;
      console.log(response);
    });
  }

  onSubmit() {
    console.log('onSubmit: payload', this.model);
    this.service.update(this.model).subscribe((response) => {
      console.log('onSubmit response:', response);

      // when successful
      this.router.navigate(['employees']);
    });
  }
}
