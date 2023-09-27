import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public async getUserByRaOrEmail(login: string): Promise<User | null>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        const users = json.users as User[] || [];
        return users.find((user) => user.ra === login || user.email === login) || null
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  public async saveUser(user: User): Promise<void>{

  }
}
