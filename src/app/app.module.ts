import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TaskComponent } from './components/task/task.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ObservableComponent } from './components/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    TaskComponent,
    AboutUsComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
