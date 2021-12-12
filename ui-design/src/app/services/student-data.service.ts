import { SYNCDATA } from './mock-sync-data';
import { Syncdata } from './../models/syncdata';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from "./mock-data";


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }

  getSyncData(): Syncdata[] {
    return SYNCDATA;
  }

}
