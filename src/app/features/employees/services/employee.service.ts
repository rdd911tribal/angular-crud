import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import HttpHelpers from 'src/app/core/helpers/http-helpers';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseApi = 'http://localhost:5000';
  constructor(private htttp: HttpClient) {}

  search(): Observable<EmployeeModel[]> {
    return this.htttp
      .get<EmployeeModel[]>(`${this.baseApi}/api/employees`)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  get(id: number): Observable<EmployeeModel> {
    return this.htttp
      .get<EmployeeModel>(`${this.baseApi}/api/employees/${id}`)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  add(model: EmployeeModel): Observable<EmployeeModel> {
    return this.htttp
      .post<EmployeeModel>(
        `${this.baseApi}/api/employees`,
        JSON.stringify(model)
      )
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  delete(id: number): Observable<boolean> {
    return this.htttp
      .delete<boolean>(`${this.baseApi}/api/employees/` + id)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  update(model: EmployeeModel): Observable<EmployeeModel> {
    return this.htttp
      .put<EmployeeModel>(
        `${this.baseApi}/api/employees/${model.Id}`,
        JSON.stringify(model)
      )
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }
}
