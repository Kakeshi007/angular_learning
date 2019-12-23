import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingMainModule } from './routing-main/routing-main.module';


import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestserviceService } from './testservice.service';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './service/todo.service';
import { TableComponent } from './component/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    AboutusComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingMainModule
  ],
  providers: [TestserviceService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
