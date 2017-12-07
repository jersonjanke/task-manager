import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  id = "";  
  data = {
    title: "",
    content: "",
    status: false
  }

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {
      this.id = params.id;
    });    
  }

  getData(id) {
    return this.http.get(`http://localhost:3000/task-one/${id}`)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.data = data;      
    })
  }

  delete(id) {
   return this.http.delete(`http://localhost:3000/tasks/${id}`)
   .map((res: Response) => res.json())
   .subscribe(data => {
    this.router.navigate(['/task-list']);
   });
  }

  update(data) {
    console.log(data);
    return this.http.put(`http://localhost:3000/tasks/${data._id}`, data)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.router.navigate(['/task-list']);
    })
  }

  cancel() {
    this.router.navigate(['/task-list']);
  }

  ngOnInit() {
    this.getData(this.id);
  }

}
