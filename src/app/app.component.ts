import { Component, OnInit } from '@angular/core';
import { Process } from "./models/Process";
import { Observable } from 'rxjs';
import { TaskService } from './services/task.service';
import {  MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(){

  }

  title = 'FIFOSimulator';
  ngOnInit(){}


}
