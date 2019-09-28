import { Renderer2 ,Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Process } from 'src/app/models/Process'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() process;
  @Input() log;
  @Output() onEnqueue: EventEmitter<any> = new EventEmitter()
  @Output() onRun: EventEmitter<any> = new EventEmitter()
  @Output() onDequeue: EventEmitter<any> = new EventEmitter()
  @Output() saveChanges: EventEmitter<any> = new EventEmitter()
  @Output() clearLog: EventEmitter<any> = new EventEmitter()
  selectItem: any;

  constructor() { }

  ngOnInit() {

  }


  selecItem(item: Process) {
    this.selectItem = item

  }

  clear(){
    this.clearLog.emit()
  }


  enqueue(name: string,cpuBurst: number, landingTime: number) {
    this.onEnqueue.emit(new Process(name,cpuBurst, landingTime))
  }

  run() {
    this.onRun.emit()
  }

  dequeue() {
    this.onDequeue.emit(this.selectItem)
  }

  saveChange(item: Process,pId:number, iName:string, iBurst: number, iLanding: number) {
    let nItem = new Process(iName, iBurst,iLanding, pId)
    if (this.selectItem != null) {
      this.saveChanges.emit([item, nItem])
    } else {
      this.selectItem = item

    }

  }

}
