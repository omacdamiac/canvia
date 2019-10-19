import { Component, OnInit} from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from "../employee.service";
import { HeaderComponent } from 'src/app/header/header.component';


@Component({
  selector: 'app-pageitem',
  templateUrl: './pageitem.component.html',
  styleUrls: ['./pageitem.component.scss']
})
export class PageitemComponent implements OnInit {

  employee: Employee;
  
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee)
  }

  goBack(): void {
    this.location.back();
  }
}