import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  title = 'default';

  value  = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    ++this.value;
  }

  decrement() {
    --this.value;
  }

  reset() {
    this.value = 0;
  }
}
