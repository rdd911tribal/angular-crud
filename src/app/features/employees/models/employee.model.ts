export interface IEmployee {
  Id: number;
  Name: string;
}

export class EmployeeModel implements IEmployee {
  Id: number;
  Name: string;
  constructor() {
    this.Id = 0;
    this.Name = '';
  }
}
