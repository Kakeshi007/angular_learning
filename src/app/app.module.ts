import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestserviceService } from './testservice.service';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
