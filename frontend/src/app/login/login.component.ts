import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: any = null;
  constructor(private http: Http) { }

  ngOnInit() {}

  getLogin(form) {
    this.http.post('http://localhost:3000/users-login', form.value)
    .map((res: Response) => res.json())
    .subscribe(res => {      
      console.log(res);
      this.login = res.login;
    });
  }
}
