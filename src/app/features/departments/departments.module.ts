import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsListComponent } from './components/departments-list/departments-list.component';
import { DepartmentAddComponent } from './components/department-add/department-add.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentViewComponent } from './components/department-view/department-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentViewComponent,
  ],
  imports: [CommonModule, DepartmentsRoutingModule, FormsModule],
})
export class DepartmentsModule {}
