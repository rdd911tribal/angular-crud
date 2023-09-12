import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'view/:id', component: EmployeeViewComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'edit/:id', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
