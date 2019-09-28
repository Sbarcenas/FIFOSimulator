import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';
import { Process } from 'src/app/models/Process';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  log$: Observable<any[]>;

  constructor(private taskService:TaskService) { }

  public process$: Observable<any>


  ngOnInit(): void {
   
  }

  createTask(process:Process){
   this.process$ = this.taskService.getTask();
   this.log$ = this.taskService.getLog(); 
    this.taskService.enqueueProcess(process)
  }

  run() {
    this.taskService.runProcesses()
  }

  clearLog(){
    this.taskService.clearLog()
  }
  dequeue(pId: Process){
    this.taskService.dequeueId(pId)
  }

  update(item: Process){
    this.taskService.update(item[0],item[1])
  }

  
}
