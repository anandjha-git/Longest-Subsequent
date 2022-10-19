import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cart } from "../models/cart.model";

@Injectable()
export class CartService{
    constructor(private httpClient:HttpClient){}

    getCart():Observable<cart[]>{
        return this.httpClient.get<cart[]>('http://localhost:8080/api/v5/cart');
    }

    deleteCart(medicineId: number):Observable<cart[]>{
        //console.log(medicineId)
        return this.httpClient.delete<cart[]>(`http://localhost:8080/api/v5/cart/${medicineId}`);
    }
    addCart(medicineId:number){
        return this.httpClient.get(`http://localhost:8080/api/v5/cart/${medicineId}`);
    }
    

}
