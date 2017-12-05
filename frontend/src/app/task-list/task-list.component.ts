import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _http: Http) {
    this.getMyBlog();
  }

  ngOnInit() {
  }

  data: any = null;
  
    private getMyBlog() {
      return this._http.get('http://localhost:3000/tasks')
        .map((res: Response) => res.json())
        .subscribe(data => {
          this.data = data;
        });
    }
  
    getAdd(form) {
     this._http.post('http://localhost:3000/tasks', form.value).subscribe(res => {
       this.getMyBlog();
     });
    }
  
    delete(id) {
     this._http.delete('http://localhost:3000/tasks/' + id )
       .map((res: Response) => res.json())
       .subscribe(data => {         
         this.getMyBlog();
       });
    }
}
