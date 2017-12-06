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
    this.getData();
  }

  ngOnInit() {
  }

  data: any = null;
  
    private getData() {      
      return this._http.get(`http://localhost:3000/tasks/${localStorage.getItem('user')}`)
        .map((res: Response) => res.json())
        .subscribe(data => {
          this.data = data;
        });
    }
  
    getAdd(form) {
      form.value.user = localStorage.getItem('user');
     this._http.post('http://localhost:3000/tasks', form.value).subscribe(res => {
       this.getData();
     });
    }
  
    delete(id) {
     this._http.delete('http://localhost:3000/tasks/' + id )
       .map((res: Response) => res.json())
       .subscribe(data => {         
         this.getData();
       });
    }
}
