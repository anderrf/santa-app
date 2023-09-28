import { Injectable } from '@angular/core';
import { Class } from '../models/class/class';
import { Message } from '../models/class/message';
import { Schedule } from '../models/class/schedule';
import { ProfessorSchedule } from '../models/class/professor-schedule';

@Injectable({
  providedIn: 'root'
})
export class ClassDataService {

  constructor() { }

  public async getAllClasses(): Promise<Class[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { classes } = json.class;
        return classes || [];
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getClassByClassId(classId: string): Promise<Class | null>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { classes }: {classes: Class[]} = json.class;
        return classes.find(aClass => aClass.id === classId) || null;
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getAlertsByClassId(classId: string): Promise<Message[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { alerts }: {alerts: Message[]} = json.class;
        return alerts.filter(alert => alert.classId === classId) || [];
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getPublicNotesByClassId(classId: string): Promise<Message[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { publicNotes }: {publicNotes: Message[]} = json.class;
        return publicNotes.filter(note => note.classId === classId) || [];
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getPrivateNotesByClassId(classId: string): Promise<Message[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { privateNotes }: {privateNotes: Message[]} = json.class;
        return privateNotes.filter(note => note.classId === classId) || [];
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getSchedulesByClassId(classId: string): Promise<Schedule[]>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { classSchedules }: {classSchedules: Schedule[]} = json.class;
        return classSchedules.filter(classSchedule => classSchedule.classId === classId) || [];
      })
      .catch((err) => {
        throw new Error(err)
      });
  }

  public async getProfessorSchedulesByProfessorId(professorId: string): Promise<ProfessorSchedule | null>{
    return await fetch('/assets/mock/fake-data.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { professorSchedules }: {professorSchedules: ProfessorSchedule[]} = json.class;
        return professorSchedules.find(professorSchedule => professorSchedule.professorId === professorId) || null;
      })
      .catch((err) => {
        throw new Error(err)
      });
  }
}
