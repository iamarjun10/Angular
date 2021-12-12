import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() person:any

  constructor() { }

  ngOnInit(): void {
    console.warn(this.person.fname)
  }
 

}
