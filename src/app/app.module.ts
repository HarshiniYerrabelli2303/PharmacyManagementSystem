import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsComponent } from './drugs/drugs.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateDrugsComponent } from './drugs/update-drugs/update-drugs.component';
import { ViewAllDrugsComponent } from './drugs/view-all-drugs/view-all-drugs.component';
import { DrugServiceService } from './services/drug-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OrderComponent } from './order/order.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule}from 'ng2-order-pipe';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './filter.pipe';
import{   MatTableModule}from '@angular/material/table';

import { CartComponent } from './cart/cart.component';

import { CartserviceService } from './services/cartservice.service';
import { XExpiredDialogBoxComponent } from './x-expired-dialog-box/x-expired-dialog-box.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

import { RegisterComponentComponent } from './register-component/register-component.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersService } from './services/users.service';
import { BasicAuthIncepterService } from './services/basic-auth-incepter.service';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { AuthenticationService } from './services/authentication.service';


import { AuthGaurdService } from './services/auth-gaurd.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugsComponent,
    ViewAllDrugsComponent,
    UpdateDrugsComponent,
    SidebarComponent,
    DashboardComponent,
    OrderComponent,
    ProductsComponent,
    FilterPipe,
    XExpiredDialogBoxComponent,
    CartComponent,
    ViewComponentComponent,
    RegisterComponentComponent,
    ViewAllUsersComponent,
   UpdateProfileComponent,
    DeleteProfileComponent,
    LoginComponent,
    LogoutComponent,
    AddSupplierComponent,
    SupplierListComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent,
    CartItemComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatDialogModule,
    MatTableModule
   
   
  ],
  providers: [DrugServiceService,CartserviceService,UsersService,BasicAuthIncepterService,{provide:HTTP_INTERCEPTORS,useClass:BasicAuthIncepterService,multi:true},AuthenticationService,AuthGaurdService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
