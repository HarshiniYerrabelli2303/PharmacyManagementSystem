import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsComponent } from './drugs/drugs.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { CartComponent } from './cart/cart.component';

import { CartserviceService } from './services/cartservice.service';


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

    CartComponent,
  
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
    Ng2OrderModule

  ],
  providers: [DrugServiceService,CartserviceService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
