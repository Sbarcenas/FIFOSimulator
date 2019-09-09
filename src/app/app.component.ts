import { Component, OnInit } from '@angular/core';
import { Process } from "./models/Process";
import { ProcessManager } from "./models/ProcessManager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'FIFOSimulator';

  ngOnInit(): void {
   let pManager = new ProcessManager();
    pManager.enqueueProcess(new Process(1,2))
    pManager.enqueueProcess(new Process(3,1))
    pManager.enqueueProcess(new Process(2,3))
    pManager.enqueueProcess(new Process(1,4))
    pManager.enqueueProcess(new Process(5,5))
    pManager.enqueueProcess(new Process(1,6))
    pManager.enqueueProcess(new Process(1,7))
    pManager.runProcesses()
    
  }



}
