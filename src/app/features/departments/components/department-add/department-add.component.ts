import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../models/departmets.model';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {
  model = new DepartmentModel();

  constructor(private router: Router, private service: DepartmentsService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('onSubmit: payload', this.model);
    this.service.add(this.model).subscribe((response) => {
      console.log('onSubmit response:', response);

      // when successful
      this.router.navigate(['departments']);
    });
  }
}
