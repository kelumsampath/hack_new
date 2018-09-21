import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AuthService } from '../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driverpanel',
  templateUrl: './driverpanel.component.html',
  styleUrls: ['./driverpanel.component.css']
})
export class DriverpanelComponent implements OnInit {

  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  lat2: number = 51.673858;
  lng2: number = 7.815982;
  l1:Number=this.lat;
  l2:Number=this.lng;
  l3:Number=this.lat;
  l4:Number=this.lng;
  origin:any;
  destination:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { 
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.lng2 = +pos.coords.longitude;
        this.lat2 = +pos.coords.latitude;
      });
    }
  
  }

  ngOnInit() {
    this.getDirection()
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
   // console.log($event.coords.lat);
   // console.log($event.coords.lng);
    this.l1=$event.coords.lat;
    this.l2=$event.coords.lng;
  }
  markerDragEnd2(m: marker, $event: MouseEvent) {
  //  console.log($event.coords.lat);
   // console.log($event.coords.lng);
    this.l3=$event.coords.lat;
    this.l4=$event.coords.lng;
  }
  
  markers: marker[] = [
	  {
		  lat: this.lat,
		  lng: this.lng,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: this.lat2,
		  lng: this.lng2,
		  label: 'B',
		  draggable: true
	  }
  ]

  getDirection() {
    this.origin = { lat: this.l1, lng:this.l2 }
    this.destination = { lat: this.l3, lng: this.l4 }
   
    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }

  sendrout(){
    const rout={
      "startlang":this.l1,
      "startlong":this.l2,
      "endlang":this.l3,
      "endlong":this.l4
    }
    this.authservice.sentroute(rout).subscribe(res=>{
      if(res.state){
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
      //this.router.navigate(['/login']);
    }
      else{
      console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: ["Something went wrong!"],dismissible: false,timeout: 4000,type: 'danger'});
      //this.router.navigate(['/register']);
      }
    });
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

