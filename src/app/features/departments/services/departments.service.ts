import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { DepartmentModel } from '../models/departmets.model';
import HttpHelpers from 'src/app/core/helpers/http-helpers';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  baseApi = 'http://localhost:5000';

  constructor(private htttp: HttpClient) {}

  search(): Observable<DepartmentModel[]> {
    return this.htttp
      .get<DepartmentModel[]>(`${this.baseApi}/api/departments`)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  get(id: number): Observable<DepartmentModel> {
    return this.htttp
      .get<DepartmentModel>(`${this.baseApi}/api/departments/${id}`)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  add(model: DepartmentModel): Observable<DepartmentModel> {
    return this.htttp
      .post<DepartmentModel>(
        `${this.baseApi}/api/departments`,
        JSON.stringify(model)
      )
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  delete(id: number): Observable<boolean> {
    return this.htttp
      .delete<boolean>(`${this.baseApi}/api/departments/` + id)
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }

  update(model: DepartmentModel): Observable<DepartmentModel> {
    return this.htttp
      .put<DepartmentModel>(
        `${this.baseApi}/api/departments/${model.Id}`,
        JSON.stringify(model)
      )
      .pipe(
        tap((data) => data),
        catchError((error) => HttpHelpers.handleError(error))
      );
  }
}
