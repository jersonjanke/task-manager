import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {  Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  login: any = null;
  isLoading = false;

  constructor(private http: Http,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {}

  getLogin(form) {
    this.isLoading = true;
    this.http.post('http://localhost:3000/users-login', form.value)
    .map((res: Response) => res.json())
    .subscribe(res => {            
      this.login = res.login;         
      if(this.login) {
        this.router.navigate(['../task-list'], { relativeTo: this.route });        
        localStorage.setItem('user', res.user);
      } else {
        this.email = "";
        this.password = "";
      }
      this.isLoading = false;   
    });
  }
}
