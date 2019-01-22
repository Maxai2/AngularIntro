import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[] = [ new Fruit(1, 'apple', 1.43), new Fruit(2, 'orange', 2.45), new Fruit(3, 'mango', 5.67)];

  constructor() { }
 
  ngOnInit() {
  }

}
