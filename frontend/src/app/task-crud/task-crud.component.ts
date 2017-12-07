import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent implements OnInit {

  constructor(private _http: Http, private router: Router) { }

  ngOnInit() {}

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
        this.router.navigate(['/task-list']);
     });
    }
  
    delete(id) {
     this._http.delete('http://localhost:3000/tasks/' + id )
       .map((res: Response) => res.json())
       .subscribe(data => {         
         this.getData();
       });
    }

    cancel() {
      this.router.navigate(['/task-list']);
    }
}
