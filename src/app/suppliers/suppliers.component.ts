import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_service/customer.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  supplierData:any[]=[];
  constructor(private customerServe:CustomerService) { }

  ngOnInit(): void {

this.customerServe.getAllSupplier().subscribe(
  res=>{
this.supplierData=res;
console.log(this.supplierData);
  }
);
  }

  findSupplierById(id:any){
    
  }
}
