import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  protected form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

}
