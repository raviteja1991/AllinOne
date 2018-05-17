import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('title') info: string;
  unit: string = "unit1";
  @Input('items') items: string[];
  @Output('send') emitData: EventEmitter<string> = new EventEmitter<string>();
  current: string;

  constructor() {
    console.log('constructor executed');
    console.log('value of info in constructor....'+this.info);
  }

  ngOnInit() {
    console.log('component initialized');
    console.log('value of info in ngOnInit....'+this.info);
  }

  ngOnChanges() {
    console.log('Input Chnaged'+this.info);
    
  }

  ngDoCheck() {
    console.log('Instance Members Changed'+this.info);
  }

  changeColor() {
    if (this.unit == "unit1")
      this.unit = "unit2";
    else
      this.unit = "unit1";
  }

  addItem() {
    this.emitData.emit(this.current);
  }
}
