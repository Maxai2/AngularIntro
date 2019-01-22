import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.css']
})
export class Student3Component implements OnInit {

  @Input()
  student: Student;

  @Output() // подписаться на событие
  onShowStudent: EventEmitter<Student> = new EventEmitter();

  @Output()
  onRemoveStudent: EventEmitter<Student> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showStudent() {
    this.onShowStudent.emit(this.student);
  }

  removeStudent() {
    this.onRemoveStudent.emit(this.student);
  }

}
