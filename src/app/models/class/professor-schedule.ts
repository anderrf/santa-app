import { Schedule } from "./schedule";

export interface ProfessorSchedule{
  professorId: string;
  professorName: string;
  professorEmail: string;
  schedules: Schedule[];
}
