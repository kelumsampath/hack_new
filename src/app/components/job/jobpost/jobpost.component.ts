import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {
  jobtitle:String;
  gender:String;
  priceperhour:Number;
  estimatedtime:String;
  joblocation:String;
  jobdate:Date;
  levelofjob:String;
  numberofcleaners:Number;
  timeforstart:Time;

  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  jobpost(){
    const job={
      jobtitle:this.jobtitle,
      gender:this.gender,
      priceperhour:this.priceperhour,
      estimatedtime:this.estimatedtime,
      joblocation:this.joblocation,
      jobdate:this.jobdate,
      levelofjob:this.levelofjob,
      numberofcleaners:this.numberofcleaners,
      timeforstart:this.timeforstart
    }
    this.authservice.postjob(job).subscribe(res=>{
      if(res.state){
      this.ngFlashMessageService.showFlashMessage({messages: ["Your job send to admin!"],dismissible: true,timeout: 4000,type: 'success'});
      this.router.navigate(['/..']);}
      else{
      console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: ["Something went wrong!"],dismissible: false,timeout: 4000,type: 'danger'});
      this.router.navigate(['/jobpost']);
      }
    });
  }

}
