import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCrudComponent } from './task-crud/task-crud.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [  
  { path: 'task-list', component: TaskListComponent},
  { path: 'task-new', component: TaskCrudComponent},
  { path: 'task-update/:id', component: TaskUpdateComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}