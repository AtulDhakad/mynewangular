import { first } from 'rxjs/operators';
import { User } from './../../../models/User';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService,
    private userService:UserService
 
) {}



  ngOnInit() {
 
  }

 

}
