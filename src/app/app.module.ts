import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingMainModule } from './routing-main/routing-main.module';
import { MatIconModule, 
  MatTableModule, 
  MatPaginatorModule,
   MatSortModule, 
   MatFormFieldModule, 
   MatInputModule,
   MatCheckboxModule
  } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestserviceService } from './testservice.service';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TodoService } from './service/todo.service';
import { TableComponent } from './component/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './component/pagination/pagination.component';
import { TablefromgridComponent } from './component/tablefromgrid/tablefromgrid.component';
import { BankComponent } from './component/bank/bank.component';
import { ViewComponent } from './component/bank/view/view.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    AboutusComponent,
    TableComponent,
    PaginationComponent,
    TablefromgridComponent,
    BankComponent,
    ViewComponent,
    CustomersComponent,
    CustomerFormComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingMainModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule ,
    MatIconModule,
    FontAwesomeModule,
    MatCheckboxModule
  ],
  providers: [TestserviceService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
