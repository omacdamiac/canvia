import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }
  
  getEmployees(): Observable<Employee[]>{
    this.messageService.add('EmployeeService: fetched employees');
    return of(EMPLOYEES);
  }
  getEmployee(id: number): Observable<Employee>{
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  } 
}
