import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any = null;

 constructor(private _http: Http) {
    this.getMyBlog();
  }

  private getMyBlog() {
    return this._http.get('http://localhost:3000/tasks')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  getAdd(form) {
   this._http.post('http://localhost:3000/tasks', form.value).subscribe(res => {
     console.log(res);
     this.getMyBlog();
   });
  }

  delete(id) {
   this._http.delete('http://localhost:3000/tasks/' + id )
     .map((res: Response) => res.json())
     .subscribe(data => {
       console.log(data);
       this.getMyBlog();
     });
  }
}
