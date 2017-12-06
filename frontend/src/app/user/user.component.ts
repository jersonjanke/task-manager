import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {}

  getSave(form) {
    this.http.post('http://localhost:3000/users', form.value)
    .map((res: Response) => res.json())
    .subscribe(res => {
      console.log(res);      
    });
  }

}
