import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MainComponent} from "./components/main/main.component";
import { ObservableComponent } from './components/observable/observable.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: ObservableComponent },
  {path: 'AboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
