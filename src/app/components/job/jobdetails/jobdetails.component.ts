import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  postid:any;
  title:String;
  status:String;
  jobdate:String;
  levelofjob:String;
  employeegender:String;
  priceperhour:String;
  estimatedtime:String;
  numberofcleaners:Number;
  joblocation:String;
  splitted:any;
  date:String;
  
  constructor(
              private activatedRoute: ActivatedRoute,
              private authservice:AuthService,
              private ngFlashMessageService: NgFlashMessageService,
              private router:Router,
  ) { 
    this.postid={
      postid:this.activatedRoute.snapshot.paramMap.get('postid')
    }
    this.authservice.getjobpost(this.postid).subscribe(res=>{
      if(res.state){
        
          this.title=res.job.title;
          this.jobdate=res.job.jobdate;
          this.levelofjob=res.job.levelofjob;
          this.employeegender=res.job.employeegender;
          this.priceperhour=res.job.priceperhour;
          this.estimatedtime=res.job.estimatedtime;
          this.numberofcleaners=res.job.numberofcleaners;
          this.joblocation=res.job.joblocation;
          this.splitted = this.jobdate.split("T",2);
          this.date=this.splitted[0];
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

  ngOnInit() {
  }
  getpost(){
    
  }
}
