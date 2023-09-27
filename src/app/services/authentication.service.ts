import { UsersDataService } from './users-data.service';
import { Injectable } from '@angular/core';
import { User } from '../models/users/user';
import { LoginRequest } from '../models/users/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private dataService: UsersDataService) { }

  public async getAuthenticatedUser(): Promise<User>{
    const userString = localStorage.getItem('user') || '';
    if(!userString.length){
      throw new Error('Forbidden');
    }
    return JSON.parse(userString);
  }

  public async setAuthenticatedUser(user: User): Promise<void>{
    if(!user){
      throw new Error('No data was passed');
    }
    await localStorage.setItem('user', JSON.stringify(user));
  }

  public async logout(): Promise<void>{
    await localStorage.setItem('user', '');
  }

  public async logon(loginRequest: LoginRequest): Promise<void>{
    const user = await this.dataService.getUserByRaOrEmail(loginRequest.login);
    if(!user){
      throw new Error('Invalid credentials');
    }
    if(user.password !== loginRequest.password){
      throw new Error('Invalid credentials');
    }
    await this.setAuthenticatedUser(user)
  }
}
