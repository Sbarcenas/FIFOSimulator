import { Component, OnInit, Input } from '@angular/core';
import { Process } from "../../models/Process";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() processes:Process;

  constructor() { }

  ngOnInit() {
console.log(this.processes)
  }


  

}
