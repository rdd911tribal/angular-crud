import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
  ],
  imports: [CommonModule, EmployeesRoutingModule, FormsModule],
})
export class EmployeesModule {}
