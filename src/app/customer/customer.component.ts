import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_service/customer.service';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
 customerData:any[]=[];
 searchResult:any;
 customerInfo:Customer = new Customer();
 customerID:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {

    this.customerService.getAllCustomers().subscribe(
      res=>{
       
        this.customerData=res;
      
       
      },
      err=>{
        console.log(err);
      }
    );
  }

  // search(customerID:any){

  //   if(this.searchResult==""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.customerService.getCustomerById(customerID).subscribe(
  //       res=>{
  //         this.customerInfo=res;
  //         console.log(res);
  //       },
  //       err=>{
  //         console.log(err);
  //       }
  //     );
  //   }
  // }
  findCustomerById(id:any){
this.customerService.getCustomerById(id).subscribe(
  res=>{
    this.customerInfo=res[0];
    console.log(this.customerInfo);
  },
  err=>{
    console.log(err);
  }
);
  }
}
