import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';

        
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Router } from '@angular/router/src/router';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { JobpostComponent } from './components/job/jobpost/jobpost.component';
import { ViewjobsComponent } from './components/job/viewjobs/viewjobs.component';
import { JobdetailsComponent } from './components/job/jobdetails/jobdetails.component';
import { AdminpenalComponent } from './components/admin/adminpenal/adminpenal.component';
import { HomeComponent } from './components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { DriverpanelComponent } from './components/driverpanel/driverpanel.component';

const applicationRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'jobpost',component:JobpostComponent, canActivate: [AuthGuard]},
  {path:'viewjobs',component:ViewjobsComponent},
  {path:'viewjobs/:postid',component:JobdetailsComponent},
  {path:'adminpanel',component:AdminpenalComponent, canActivate: [AuthGuard]},
  {path:'adminpanel/:postid',component:JobdetailsComponent, canActivate: [AuthGuard]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'driverpanel',component:DriverpanelComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    JobpostComponent,
    ViewjobsComponent,
    JobdetailsComponent,
    AdminpenalComponent,
    HomeComponent,
    DriverpanelComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes),
    NgFlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPgTenpyxgINlk2MhxP5b_3a-w1ZOIAOw'
    }),
    AgmDirectionModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
