import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrugsComponent } from './drugs/drugs.component';
import { UpdateDrugsComponent } from './drugs/update-drugs/update-drugs.component';
import { ViewAllDrugsComponent } from './drugs/view-all-drugs/view-all-drugs.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'viewDrug', component: ViewAllDrugsComponent },
  { path: 'updateDrug/:id', component:UpdateDrugsComponent },
  { path: 'addDrugs', component:DrugsComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
