import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { EchoService } from './services/echo.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { EchoComponent } from './views/echo/echo.component';
import { HomeComponent } from './views/home/home.component';
import { TermsComponent } from './views/terms/terms.component';
import { ExamplesComponent } from './views/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    EchoComponent,
    HomeComponent,
    TermsComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [EchoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
