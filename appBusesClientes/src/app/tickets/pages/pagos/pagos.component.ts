import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { info_tickets } from 'src/environments/environments';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit{
  public payPalConfig: any;
  public showPaypalButtons: boolean = true;
  data:any
 
  constructor(private route:ActivatedRoute, private router:Router) {
    this.route.params.subscribe( params => {
      const encodedData = params['data']
      this.data = JSON.parse(decodeURIComponent(encodedData));
      console.log(this.data)
    })
  }
 
  ngOnInit() {
    this.payPalConfig = {
      currency: "USD",
      clientId: "AQXiGq5VtuWNYc_aRZbMtxYMPdExf4_3mCgYC8jaPFSCSG8MkJPGoEsx_JXxXJaXGEbA_l51R-ZGK9CD",
      createOrder: (data: any) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: "9.99",
              },
            },
          ],
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: any) => {
        const encodedData = encodeURIComponent(JSON.stringify(this.data));
        this.router.navigate(['boletos/info',{data:encodedData}])
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data: any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
  }
 
  pay() {
    this.showPaypalButtons = true;
  }
 
  back(){
    this.showPaypalButtons = false;
  }

}