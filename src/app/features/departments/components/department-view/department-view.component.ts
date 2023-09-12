import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModel } from '../../models/departmets.model';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css'],
})
export class DepartmentViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: DepartmentsService
  ) {}
  model?: DepartmentModel;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.service.get(id).subscribe((response) => {
        this.model = response;
        console.log(response);
      });
    }
  }
}
