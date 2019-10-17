import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Employee{
  name:string;
  cargo: string;
  img:  string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  employeeList = new FormControl();
  filterEmployee: Observable<Employee[]>;

  employees: Employee[] = [
    {
      name: 'James King',
      cargo: 'President and CEO',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
    {
      name: 'Julie Taylor',
      cargo: 'VP of Marketing',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
    {
      name: 'Eugene Lee',
      cargo: 'CFO',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
    {
      name: 'John Willians',
      cargo: 'VP of Engineering',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
    {
      name: 'Ray Moore',
      cargo: 'VP of Sales',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
    {
      name: 'Paul Jones',
      cargo: 'QA Manager',
      img: 'http://www.cstecno.mx/tickets_beta/img/usuarios/user.png'
    },
  ];
  constructor() { 
    this.filterEmployee = this.employeeList.valueChanges
    .pipe(
      startWith(''),
        map(employee => employee ? this.filterEmployee(employee) : this.employees.slice())
      );
   }
   private _filterEmployee(value: string): Employee[]{
     const filterValue = value.toLowerCase();

     return this.employees.filter(employee => employee.name.toLowerCase().indexOf(filterValue) === 0);
   }

 

}
