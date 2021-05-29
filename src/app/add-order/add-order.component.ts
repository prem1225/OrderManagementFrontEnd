import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
// import * as _ from 'lodash';
import { CustomerService } from '../_service/customer.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  form:any={};
  categoryCollections:any;
  errors:any;
  productCollections:any;
  selectedValue:any;
  selectedCategory:any;
  categoryID:any;
  productID:any;
  unitPrice:any=0;
  discount:any=0;
  quantity:any;
  customerID:any;
  companyName:any;
  contactName:any;
  contactTitle:any;
  address:any;
  city:any;
  region:any;
  country:any;
  postalCode:any;
  phone:any;
  fax:any;
  requiredDate:any;
  orderID:any;
  employees:any;
  employeeID:any;
  shipperCollections:any;
  shipVia:any;
  lastorderID:any;
  constructor(public routerObj: Router, public httpObj: HttpClient, private customerService:CustomerService) {}

 

  ngOnInit(){
    
    this.customerService.getAllCategory().subscribe(
      res => {
        this.categoryCollections = res;
        console.log(this.categoryCollections);
      },
      (error) => {
        this.errors = error;

        console.log(error.error);
      }
    );
      this.GetLastOrderID();
      this.SelectEmployee();
      this.GetAllShipper();
      
    
  }
  selectChangeHandler(e:any) {
    this.categoryID=e.target.value
    
    this.customerService.getProductByCategory(this.categoryID).subscribe(
     res=>{
          this.productCollections = res;
          console.log(this.productCollections);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     selectChangeHandler1(e:any):any{
      this.productID=e.target.value
        this.selectProductUnitPrice(this.productID)
     
      // alert(e.target.value)
      

     }

     selectProductUnitPrice(productID:any){
       this.customerService.getProductaUnitPrice(productID).subscribe(
     
      res => {
        let up=res;
        this.unitPrice=up[0];
          console.log(this.unitPrice);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     

     onSubmit(){
       this.AddCustomerDetails();
       this.AddOrder();
       this.AddOrderDetails();


     }

     AddCustomerDetails():any{
  
      this.customerService.addCostomerDetails(this.customerID,this.companyName,this.contactName, this.contactTitle,
        this.address, this.city, this.region, this.postalCode,this.country, this.phone, this.fax).subscribe(
     
      res => {
        
          console.log(res);
        },
        err => {
          this.errors = err;
    
          console.log(err);
        }
      );
     }

     AddOrderDetails(){
       this.orderID=this.lastorderID+1;
       this.customerService.addOrderDetails(parseInt(this.productID),this.unitPrice, this.quantity, this.orderID).subscribe(
         res=>
      {
        console.log(res);
        
      },
      err =>{
        console.log(err);
      }
      );
     }

     AddOrder():any{
      this.httpObj.post(environment.apiurl + 'api/Order/addOrder',{
        CustomerID:this.customerID,
        EmployeeID:parseInt(this.employeeID),
        OrderDate:new Date(),
        RequiredDate:this.requiredDate,
        ShipAddress:this.address,
        ShipCity:this.city,
        ShipRegion:this.region,
        ShipPostalCode:this.postalCode,
        ShipCountry:this.country,
        ShipVia:parseInt(this.shipVia)
        
      }).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     GetLastOrderID():any{
    
      this.customerService.getOrderId().subscribe(
        (response: any) => {
        this.lastorderID=response;
        
          console.log(this.orderID);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     SelectEmployee():any{
      this.customerService.getAllEmployee().subscribe(
        (response: any) => {
        this.employees=response;
          console.log(this.employees);
        },
        (error) => {
          this.errors = error;
    
          console.log(error.error);
        }
      );
     }

     selectChangeHandler2(e:any):any{
      this.employeeID=e.target.value
        this.selectProductUnitPrice(this.employeeID)
     
      // alert(e.target.value)
      

     }


     GetAllShipper():any{
     this.customerService.getAllShipper().subscribe(
        (response: any) => {
          this.shipperCollections = response;
          console.log(this.shipperCollections);
        },
        (error) => {
          this.errors = error;
  
          console.log(error.error);
        }
      );
     
}

selectChangeHandler3(e:any):any{
  this.shipVia=e.target.value;
  console.log(this.shipVia);
}
}