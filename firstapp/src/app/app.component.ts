import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 App';
  technologies: string[] = ['java', 'dotnet', 'python', 'Angular', 'Cplusplus'];
  headings: string[] = ["Animals", "stationaries", "Electronic items"];
  childData: string[][] = [
    ["Lion", "Dog", "tiger", "bear"],
    ["Pen", "Paper", "Book", "Pencil"],
    ["Mobile", "Hard Disk", "RAM", "Tab"]
  ];

  receiveItem(data, childCount) {
    this.childData[childCount].push(data);
    this.headings[childCount]=data;
  }
  
  ngDoCheck() {
    console.log('parent version....!!!');
  }
}
