import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { Student3Component } from './student3/student3.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    Student1Component,
    Student2Component,
    Student3Component,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: '', pathMatch: 'full', redirectTo: 'students' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
