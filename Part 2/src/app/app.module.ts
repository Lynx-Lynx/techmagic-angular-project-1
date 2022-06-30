import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module'
import { UsersService } from './services/users.service';
import { APIService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [UsersService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
