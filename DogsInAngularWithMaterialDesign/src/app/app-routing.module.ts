import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogEditComponent } from './dog-edit/dog-edit.component';

const routes: Routes = [
  { path: 'dogs', component: DogsListComponent },
  { path: 'dogs/new', component: DogEditComponent },
  { path: 'newDog', component: DogEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
