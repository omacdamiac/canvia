import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
title_employee:string;

  constructor() { 
    this.title_employee = 'Employee';
  }

  ngOnInit() {
  }

}
