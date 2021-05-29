import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  orderCount:any;
  productCount:any;
  categoryCount:any;
  customerCount:any;
  employeeCount:any;
  shipperCount:any;
  supplierCount:any;
  constructor(private httpO:HttpClient) { }

  ngOnInit(): void {
this.httpO.get(environment.apiurl+'api/Order/getOrderNumber').subscribe(
  res=>{
    console.log(res);
    this.orderCount=res;
  });
  this.httpO.get(environment.apiurl+'api/Order/getProductNumber').subscribe(
    res=>{
      console.log(res);
      this.productCount=res;
    }
);
  
  this.httpO.get(environment.apiurl+'api/Category/getCategoryNumber').subscribe(
    res=>{
      console.log(res);
      this.categoryCount=res;
    }
);

this.httpO.get(environment.apiurl+'api/Customerapi/getCustomerNumber').subscribe(
  res=>{
    console.log(res);
    this.customerCount=res;
  }
);

this.httpO.get(environment.apiurl+'api/Employee/getEmployeeNumber').subscribe(
  res=>{
    console.log(res);
    this.employeeCount=res;
  }
);
this.httpO.get(environment.apiurl+'api/Supplier/getShipperNumber').subscribe(
  res=>{
    console.log(res);
    this.shipperCount=res;
  }
);
this.httpO.get(environment.apiurl+'api/Supplier/getSupplierNumber').subscribe(
  res=>{
    console.log(res);
    this.supplierCount=res;
  }
);
  }

}
