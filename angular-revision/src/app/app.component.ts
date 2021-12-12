import { Component } from '@angular/core';

//for template driven & for reactive form
import { FormControl, FormGroup,  Validators } from "@angular/forms";

//import { ActivatedRoute } from "@angular/router";  //for dynamic routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-revision';

//-------dynamic routing start---------
  // {
  //  component: UserComponent  
  //  path:'user/:id'
  // }
  // constructor(private route:ActivatedRoute){}
  // this.route.snapshot.paramMap.get('id')

//-------dynamic routing end-----------

//--------Forms start--------
  //reactive form
  loginForm= new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get validateEmail(){
    return this.loginForm.get('email');
  }

  get validatePassword(){
    return this.loginForm.get('password');
  }

  //template driven form
  getFormValues(item:any){
    console.warn(item);
  }

//--------Forms end--------


}
