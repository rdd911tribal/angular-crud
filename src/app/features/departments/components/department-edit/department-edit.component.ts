import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { DepartmentModel } from '../../models/departmets.model';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
  model: DepartmentModel = new DepartmentModel();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DepartmentsService
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.params['departmentid'];
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
      this.router.navigate(['departments']);
    });
  }
}
