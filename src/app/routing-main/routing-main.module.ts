import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from '../component/table/table.component';
import { AboutusComponent} from '../component/aboutus/aboutus.component';
import { PaginationComponent } from '../component/pagination/pagination.component';
import { TablefromgridComponent } from '../component/tablefromgrid/tablefromgrid.component';
import { BankComponent } from '../component/bank/bank.component';
import { ViewComponent } from '../component/bank/view/view.component';
import { CustomersComponent } from '../component/customers/customers.component';
import { CustomerFormComponent } from '../component/customer-form/customer-form.component';

const routes: Routes = [
   {path: 'table', component: TableComponent},
   {path: 'aboutus', component: AboutusComponent},
   {path: 'page', component: PaginationComponent},
   {path: 'grid', component: TablefromgridComponent},
   {path: 'bank', component: BankComponent},
   {path: 'bankview/:id', component: ViewComponent},
   {path: 'customers', component: CustomersComponent},
   {path: 'customer-form/:id/:company', component: CustomerFormComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainModule {}