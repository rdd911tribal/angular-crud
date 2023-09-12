export interface IDepartment {
  Id: number;
  Name: string;
}

export class DepartmentModel implements IDepartment {
  Id: number;
  Name: string;
  constructor() {
    this.Id = 0;
    this.Name = '';
  }
}
