import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsComponent } from './drugs/drugs.component';
import { UpdateDrugsComponent } from './update-drugs/update-drugs.component';
import { ViewAllDrugsComponent } from './view-all-drugs/view-all-drugs.component';

const routes: Routes = [
  { path: 'veiwDrugs', component: ViewAllDrugsComponent },
  { path: 'updateDrug/:id', component:UpdateDrugsComponent },
  { path: 'addDrugs', component:DrugsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
