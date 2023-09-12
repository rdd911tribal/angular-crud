import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListComponent } from './components/departments-list/departments-list.component';
import { DepartmentViewComponent } from './components/department-view/department-view.component';
import { DepartmentAddComponent } from './components/department-add/department-add.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsListComponent,
  },
  { path: 'view/:id', component: DepartmentViewComponent },
  { path: 'add', component: DepartmentAddComponent },
  { path: 'edit/:departmentid', component: DepartmentEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
