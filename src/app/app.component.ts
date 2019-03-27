import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatable';

  userList = [];
 constructor(private data : DataService){}

 ngOnInit(){

  // this.userList = this.data.User;

 }

 
}
