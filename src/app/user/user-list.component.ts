import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  form:any ={
    list:[],
    preload:[],
    searchParams:{},
    deleteParams:[],
    message:'',
    pageNo:0
    
  }
  constructor(private httpClient: HttpClient , private router: Router) {

  }
  ngOnInit(): void {
    this.search();

  }
  search() {

    this.httpClient.post('http://localhost:8080/User/search/'+ this.form.pageNo, this.form.searchParams).subscribe((res:any) =>{
   this.form.list =  res.result.data ;
      
    })
  }
}
