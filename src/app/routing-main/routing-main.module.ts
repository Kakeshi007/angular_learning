import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from '../component/table/table.component';
import { AboutusComponent} from '../component/aboutus/aboutus.component';
import { PaginationComponent } from '../component/pagination/pagination.component';
import { TablefromgridComponent } from '../component/tablefromgrid/tablefromgrid.component';
import { BankComponent } from '../component/bank/bank.component';
import { from } from 'rxjs';

const routes: Routes = [
   {path: 'table', component: TableComponent},
   {path: 'aboutus', component: AboutusComponent},
   {path: 'page', component: PaginationComponent},
   {path: 'grid', component: TablefromgridComponent},
   {path: 'bank', component: BankComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainModule {}