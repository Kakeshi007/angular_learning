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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './component/pagination/pagination.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { TablefromgridComponent } from './component/tablefromgrid/tablefromgrid.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    AboutusComponent,
    TableComponent,
    PaginationComponent,
    TablefromgridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingMainModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [TestserviceService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
