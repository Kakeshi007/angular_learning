import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from '../component/table/table.component';
import { AboutusComponent} from '../component/aboutus/aboutus.component';
const routes: Routes = [
   {path: 'table', component: TableComponent},
   {path: 'aboutus', component: AboutusComponent},
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainModule {}