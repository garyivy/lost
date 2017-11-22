import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EchoComponent } from './views/echo/echo.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},      
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'echo',
    component: EchoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
