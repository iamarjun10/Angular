import { Component } from '@angular/core';
import { UserDataService } from './user-data.service'
import { UsersService } from './users.service';
import { userDataClass } from './model/userDataModel'
import { IEmployee } from './model/employee';
import { TypicodePost } from './model/post';
import { TypicodePostInputParameter } from './model/typicodePostInputParameter';
import { TypicodePostResponse } from './model/typicodePostResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name = 'Arjun';
  disabledBox = true;
  show = true;
  color = "green";

  obj = {
    fname: 'Arjun',
    lname: 'Naik'
  }

  public employees: IEmployee[] = [];
  public posts: TypicodePost[] = [];

  public TypicodeInputParameter: TypicodePostInputParameter = {body:'hello', title:'post1', userId:6};
  public TypicodePostResponse:TypicodePostResponse[] = [];
  getName() {
    return this.obj
  }


  disableButton() {
    this.disabledBox = false
  }

  submitForm(value: any) {
    console.log(value);
  }

  person = [
    {
      fname: "Arjun",
      lname: "Naik",
      age: 24
    }, {
      fname: "Subham",
      lname: "Mishra",
      age: 24
    }, {
      fname: "Saidatta",
      lname: "Sawant",
      age: 24
    },
    {
      fname: "Khushboo",
      lname: "Shetkar",
      age: 24
    },
    {
      fname: "Natasha",
      lname: "Anvekar",
      age: 24
    }
  ]

  parentComponent(value: any) {
    console.warn(value)
  }

  uname = "";
  // constructor(private user:UserDataService){
  //   console.warn(this.user.getData());
  //   let userData = this.user.getData();
  //   this.uname = userData.name;
  // }

  data: any;
  constructor(private user: UsersService,
    private _employeeService: UserDataService) {

    this.user.getUserData().subscribe(data => {
      console.warn(data);
      this.data = data;
    })

    this._employeeService.getEmployees().subscribe(data => this.employees = data);
    this._employeeService.getPostByParameter().subscribe(data => this.posts = data);
    }

  ngOnInit() {
    //this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }


  //public lat = 47.37297;
  // public lng = 8.53986;
  //model
  // public displayData() {
  //   //model
  //   var customerData: userDataClass = {
  //     firstName: 'Arjun',
  //     lastName: 'Naik',
  //     age: 24,
  //     address: 'Mapusa Goa'
  //   }
  //   return customerData;
  // }


  //Model and Interface
  public checkCustomer() {
    var customerData: userDataClass = {
      postId: 6,
      id: 8,
      name: 'Subham',
      email: "xyz@gmail.com",
      body: "13/4 Borim"
    }
    return customerData;
  }

  // Call api service on click of the button
  postApi(){
    this._employeeService.postOnTypicode(this.TypicodeInputParameter).subscribe(data => {this.TypicodePostResponse = data
      console.log(data);});
  }

  callApi() {
    //Post Request Call

    this.user.getData(this.checkCustomer())
      .subscribe(postUserReponse => {
        console.log(postUserReponse.id);
      })

  }



}