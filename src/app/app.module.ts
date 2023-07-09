import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonInfoService } from './services/person-info-service';

@NgModule({
  declarations: [
    AppComponent,
      PersonInfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PersonInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
