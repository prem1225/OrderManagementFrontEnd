

import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules, identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data;boundary="file"'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService   {

  constructor(public http:HttpClient) { }
//   ngOnInit():void{
  
//  }
 getAllCustomers():Observable<any>{
  return this.http.get(environment.apiurl+'Customer/findAllCustomer', {responseType:'json'});
 }
 getCustomerById(id:any):Observable<any>{

  return this.http.get(environment.apiurl+'Customer/findCustomerById/'+id, {responseType:'json'});
 }
 getAllSupplier():Observable<any>{

  return this.http.get(environment.apiurl+'api/Supplier/Suppliers',{responseType:'json'});
 }

 getAllCategory():Observable<any>{

  return this.http.get(environment.apiurl+'api/getAllCategories',{responseType:'json'});
 }
 getProductByCategory(id:any):Observable<any>{

  return this.http.get(environment.apiurl+'api/Category/ProductByCategory/'+id,{responseType:'json'});
 }

 getProductaUnitPrice(id:any):Observable<any>{

  return this.http.get(environment.apiurl+'api/Category/ProductUnitPrice/'+id,{responseType:'json'});
 }

 getAllEmployee():Observable<any>{

  return this.http.get(environment.apiurl+'api/Employee/getAllEmployee',{responseType:'json'});
 }
 getAllShipper():Observable<any>{

  return this.http.get(environment.apiurl+'api/Order/getAllShipper',{responseType:'json'});
 }
 
 
 addOrderDetails(ProductID:any,UnitPrice:any,Quantity:any, orderID:any):Observable<any>{

  return this.http.post(environment.apiurl+'api/Order/orderDetails',
       { 
        ProductID:ProductID,
        UnitPrice:UnitPrice,
        Quantity:Quantity,
        OrderID:orderID,
        Discount:0},{responseType:'json'});
 }
 addOrder():Observable<any>{

  return this.http.post(environment.apiurl+'api/addOrder',{responseType:'json'});
 }
 
 addCostomerDetails(customerID:any, companyName:any, contactName:any, contactTitle:any, address:any,
   city:any, region:any,
  postalCode:any, country:any, phone:any, fax:any):Observable<any>{

  return this.http.post(environment.apiurl+'api/Customerapi',{
    CustomerID:customerID
    ,CompanyName:companyName
    ,ContactName:contactName
    ,ContactTitle:contactTitle
    ,Address:address
    ,City:city
    ,Region:region
    ,PostalCode:postalCode
    ,Country:country
    ,Phone:phone
    ,Fax:fax
  },{responseType:'json'});
 }
 getOrderId():Observable<any>{

  return this.http.get(environment.apiurl+'api/Order/getLastOrderID',{responseType:'json'});
 }
}
