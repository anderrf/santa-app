import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  protected form!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  public async logon(): Promise<void>{
    const loginRequest = this.form.getRawValue();
    await this.authenticationService.logon(loginRequest)
      .then(() => {
        this.router.navigateByUrl('/main')
      })
      .catch((err) => {
        alert(err)
      })
  }

}
