import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  zoom: number = 16;
  title: string = 'APP';
  public lat:any;
  public lng:any;
  public origin: any
  public destination: any

  constructor() { }

  ngOnInit() {
    if (1==1)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
    //this.origin = { lat: 51.678430, lng: 6.809009 }
    //this.destination = { lat: 51.678418, lng: 7.809007 }
  }
  mapClicked($event: MouseEvent) {
      this.origin.lat = $event.coords.lat;
      this.origin.lng = $event.coords.lng;
  }

}
