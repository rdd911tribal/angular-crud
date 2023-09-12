import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employees/employees.module').then(
        (x) => x.EmployeesModule
      ),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./features/departments/departments-routing.module').then(
        (x) => x.DepartmentsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
