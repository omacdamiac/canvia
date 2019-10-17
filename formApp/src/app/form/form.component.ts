import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  formUser: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //validación de USER DETAILS
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      yourbirthday: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]\d{6,8}$/)
      ])],
      bio: []
    });

    // Validación de Account details
    this.formUser = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(25)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pass:['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])],
      passc:['', Validators.compose([
        Validators.required
      ])],
      term: ['', Validators.required]
    },{
      validator: MustMatch('pass','passc')
    });

  }

}
