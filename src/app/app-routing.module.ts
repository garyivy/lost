import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EchoComponent } from './views/echo/echo.component';
import { TermsComponent } from './views/terms/terms.component';
import { ExamplesComponent } from './views/examples/examples.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
  },
  {
    path: 'echo',
    canActivate: [AuthGuard],
    component: EchoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
