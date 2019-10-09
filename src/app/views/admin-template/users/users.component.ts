import { first } from 'rxjs/operators';
import { User } from './../../../models/User';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { PageChangedEvent } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService,
    private userService:UserService,
    private formBuilder: FormBuilder,
    
) {}

userEditForm: FormGroup;

users: User[] = [];
returnedArray: User[] = [];

  ngOnInit(): void{
    this.userService.getAll().pipe(first()).subscribe(data => {
      this.users = data['token'];
      console.log('user data ',this.users);
     this.returnedArray = data['token'].slice(0, 10);
  });

  this.userEditForm = this.formBuilder.group({
    username: '',
    email: '',
    mobile:'',
    address:''

});

  }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.users.slice(startItem, endItem);
  }

  deleteUser(id){

    this.returnedArray = this.users.filter((value,key)=>{
      return value._id != id;
       
    }).slice(0, 10);
    //alert(id);
    //this.ps.deleteProduct(id).subscribe(res => {
      //this.returnedArray.splice(id, 1);
    //});
  };

  useredit : string = "";

  editusersfun(id){

   this.useredit = id;

  }
 

  saveusers(id){

   console.log(this.userEditForm);

    this.useredit= "";

  }






}
