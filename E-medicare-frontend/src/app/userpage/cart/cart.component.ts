import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:cart[]|undefined;
 

  constructor(private cartService: CartService,
   private router: Router,
   private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart)=>{
      this.carts = cart;
    })
    
  }

  deleteCart(medicineId: number){
    //Swal.fire('Item Will be Removed From Cart !!');
    // alert('Item Will be Removed From Cart !!') ;
    this.cartService.deleteCart(medicineId).subscribe();
    //this.getCart();
    return location.reload();

  }
  getCart() {
    this.cartService.getCart();
  }

  payment(){
    Swal.fire('Your Order Placed Succesfully');
    this.router.navigate(['/billing'], {relativeTo: this.route});
  }
  back(){
   
    this.router.navigate(['/userpage'], {relativeTo: this.route});
  }
}
