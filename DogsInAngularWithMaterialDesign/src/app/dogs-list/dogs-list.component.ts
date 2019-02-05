import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { MatDialog } from '@angular/material/dialog';
import { DogEditComponent } from '../dog-edit/dog-edit.component';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})
export class DogsListComponent implements OnInit {

  dogs: Dog[] = [
    new Dog(1, 'Dog 1', false, 'black'),
    new Dog(2, 'Dog 2', true, 'white'),
    new Dog(3, 'Dog 3', false, 'ginger'),
    new Dog(4, 'Dog 4', true, 'brown'),
    new Dog(5, 'Dog 5', false, 'yellow')
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(dogId: number) {
    let dog = new Dog(0, '', false, '');
    if (!isNaN(dogId)) {
      dog = this.dogs.find(d => d.id === dogId);
    }

    const dialogRef = this.dialog.open(DogEditComponent, { data: dog });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
