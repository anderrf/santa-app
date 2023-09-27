import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  protected name!: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    this.name = (await this.authenticationService.getAuthenticatedUser()).name
  }

  public async logout(): Promise<void>{
    await this.authenticationService.logout()
      .then(() => {
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        alert(err)
      });
  }

}
