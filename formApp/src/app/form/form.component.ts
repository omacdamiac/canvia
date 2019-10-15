import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      yourbirthday: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]\d{6,8}$/)
      ])],
      done: false
    });
  }

}
