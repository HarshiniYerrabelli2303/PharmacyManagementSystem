import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADoctorOrderWindowComponent } from './a-doctor-order-window/a-doctor-order-window.component';
import { PickupOrderWindowComponent } from './a-doctor-order-window/pickup-order-window/pickup-order-window.component';
import { VerifiedDoctorOrderWindowComponent } from './a-doctor-order-window/verified-doctor-order-window/verified-doctor-order-window.component';
import { AExpOutofstockWindowComponent } from './a-exp-outofstock-window/a-exp-outofstock-window.component';
import { AboutToExpireWindowComponent } from './a-exp-outofstock-window/about-to-expire-window/about-to-expire-window.component';
import { AboutToFinishWindowComponent } from './a-exp-outofstock-window/about-to-finish-window/about-to-finish-window.component';
import { OutOfStockWindowComponent } from './a-exp-outofstock-window/out-of-stock-window/out-of-stock-window.component';
import { SalesChartComponent } from './a-sales-window/sales-chart/sales-chart.component';
import { SalesReportComponent } from './a-sales-window/sales-report/sales-report.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

import { CartComponent } from './cart/cart.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';

import { DrugsComponent } from './drugs/drugs.component';
import { UpdateDrugsComponent } from './drugs/update-drugs/update-drugs.component';
import { ViewAllDrugsComponent } from './drugs/view-all-drugs/view-all-drugs.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewComponentComponent } from './view-component/view-component.component';


const routes: Routes = [
  //supplier 
  {path: 'suppliers',component:AddSupplierComponent},
  {path: 'updatesupplier/:id',component:UpdateSupplierComponent},
  {path: 'deleteSupplier',component:DeleteSupplierComponent},
  {path: 'viewSupplier',component:SupplierListComponent},
 //drugs
  { path: 'viewDrug', component: ViewAllDrugsComponent },
  { path: 'updateDrug/:id', component:UpdateDrugsComponent },
  { path: 'addDrugs', component:DrugsComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'products', component:ProductsComponent},
  //user
  { path : 'register' , component:RegisterComponentComponent},
{ path : 'viewProfile/:id', component:ViewComponentComponent},
{ path : 'login', component: LoginComponent },
{ path : 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
{ path : 'viewAllUsers' , component:ViewAllUsersComponent},
{ path : 'update/:userId', component:UpdateProfileComponent},

{path: 'doctororders/new', component: VerifiedDoctorOrderWindowComponent },
  {path: 'doctororders', component: ADoctorOrderWindowComponent },
  {path: 'doctororders/pickedUp', component: PickupOrderWindowComponent },

  {path: 'expoutofstock', component: AExpOutofstockWindowComponent },
  {path: 'expoutofstock/abouttoexpire', component: AboutToExpireWindowComponent },

  {path: 'outofstock', component: OutOfStockWindowComponent },
  {path: 'outofstock/abouttofinish', component: AboutToFinishWindowComponent },


  {path: 'salesreport', component: SalesChartComponent },
  {path: 'salesreport/report', component: SalesReportComponent },
//cart
  { path: 'cart', component:CartComponent},
  {path:'checkout',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
