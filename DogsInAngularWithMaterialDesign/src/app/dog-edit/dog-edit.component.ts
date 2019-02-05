import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dog } from '../models/dog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.less']
})
export class DogEditComponent implements OnInit {

  // dogForm: FormGroup = this.fb.group({
  //   name: ['', Validators.required],
  //   gender: ['', Validators.required],
  //   color: ['', Validators.required]
  // });

  dogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DogEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Dog) { }

  ngOnInit() {
    this.dogForm = this.fb.group({
         name: [this.data.name, Validators.required],
         gender: [this.data.gender, Validators.required],
         color: [this.data.color, Validators.required]
       });
  }

  onSubmit() {
    if (this.dogForm.valid) {
      if (this.data.id === 0) {

      const dog = new Dog(
        13,
        this.dogForm.value.name,
        this.dogForm.value.gender,
        this.dogForm.value.color);

        this.dialogRef.close(dog);
      } else {
        this.data.name = this.dogForm.value.name;
        this.data.gender = this.dogForm.value.gender;
        this.data.color = this.dogForm.value.color;

        this.dialogRef.close(this.data);
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
