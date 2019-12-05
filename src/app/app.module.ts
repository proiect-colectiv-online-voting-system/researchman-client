import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Main/Navbar/navbar/navbar.component';
import { FileComponent } from './Components/Main/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   routingComponents,
   FileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
