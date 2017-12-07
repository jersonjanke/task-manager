import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    TaskCrudComponent,
    TaskUpdateComponent
  ],
  imports: [  
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
