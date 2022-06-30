import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module'
import { UsersService } from './modules/users/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
