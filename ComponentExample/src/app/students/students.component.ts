import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  curStudent: Student;

  students: Student[] = [
    new Student(1, 'qwerty', new Date(1993, 2, 23)),
    new Student(2, 'qwerty1', new Date(1994, 3, 21)),
    new Student(3, 'qwerty2', new Date(1995, 4, 22)),
    new Student(4, 'qwerty3', new Date(1996, 5, 24))
  ];

  constructor() { }

  ngOnInit() {
  }

  showStudent(student: Student)  {
    this.curStudent = student;
  }

  removeStudent(student: Student) {
    const index = this.students.indexOf(student);

    this.students.splice(index, 1);
  }

}
