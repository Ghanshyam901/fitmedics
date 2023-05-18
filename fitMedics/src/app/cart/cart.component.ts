import { Component } from '@angular/core';
import { LabtestService } from '../labtest.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any;
  retrievedData: any;
  items:any;

  constructor(private service : LabtestService) { }
  

  ngOnInit(): void {
    
  }

  showCartItems() {
  this.retrievedData = localStorage.getItem('cartItems');
  this.cartItems = JSON.parse(this.retrievedData);
  }

  clearcart(){
    localStorage.removeItem('cartItems');
  }

  
options = {
  "key": "rzp_test_M47RbQNk904fv5", // Enter the Key ID generated from the Dashboard
  "amount": "500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Fitmedics", //your business name
  "description": "Test Transaction",
  "image": "http://www.newdesignfile.com/postpic/2014/06/icon-air-airline-photos_63759.png",
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": " Kumar", //your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
rzp1:any;

item:any;

price:any;
productname:any;


paying(items:any){

  this.item = items;
  this.price = items.billing_amount;
  this.productname = items.medicine_name;
  // console.log(this.item.id);
  this.options.amount = (this.price * 100).toString();


this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
this.rzp1.open();

}

}