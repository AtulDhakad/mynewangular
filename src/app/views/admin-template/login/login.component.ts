import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../services/authentication.service';
import { UserService  } from './../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

 constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService:AuthenticationService,
        private userService :UserService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/admin/dashboard']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        // so
        this.submitted = true;
       
        console.log(this.loginForm);
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

       // this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe()
            .subscribe(
                data => {
                    this.router.navigate(['/admin/dashboard']);
                },
                error => {
                   // this.alertService.error(error);
                   console.log(error);
                    //this.loading = false;
                });
    }
}
