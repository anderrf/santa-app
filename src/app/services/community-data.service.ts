import { Injectable } from '@angular/core';
import { Alert } from '../models/community/alert';
import { Partnership } from '../models/community/partnership';
import { Event } from '../models/community/event';

@Injectable({
  providedIn: 'root'
})
export class CommunityDataService {

  constructor() { }

  public async getAllAlerts(): Promise<Alert[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        const { alerts } = json.community;
        return alerts || [];
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  public async getAllPartnerships(): Promise<Partnership[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { partnerships } = json.community;
        return partnerships || [];
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  public async getAllEvents(): Promise<Event[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        const { events } = json.community;
        return events || [];
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}
