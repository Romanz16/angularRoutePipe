import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskListComponent } from './pages/home/task-list/task-list.component';
import { TaskObjectComponent } from './pages/home/task-object/task-object.component';
import { TaskPipeComponent } from './pages/home/task-pipe/task-pipe.component';
import { SearchPipe } from './search.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TaskListComponent,
    TaskObjectComponent,
    TaskPipeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
