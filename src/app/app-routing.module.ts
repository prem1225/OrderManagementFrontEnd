import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { CustomerComponent } from './customer/customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [

  // https://localhost:44369/
   { path: '', redirectTo:"login" , pathMatch:'full'},
  {path:'customers', component:CustomerComponent},
  {path:'login', component:LoginComponent},
  {path:'suppliers',component:SuppliersComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'add-order',component:AddOrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

