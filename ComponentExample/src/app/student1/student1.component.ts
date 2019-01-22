import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css']
})
export class Student1Component implements OnInit {

  @Input()
  student: Student;

  constructor() { }

  ngOnInit() {
  }

}
