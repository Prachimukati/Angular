import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  form:any ={
    data:{},
    message:'',
    inputerror:{}
  }
  constructor( private router:Router ,  private httpClient: HttpClient){

  }
  save(){
    this.httpClient.post('http://localhost:8080/User/save',this.form.data).subscribe((res: any) => {
      console.log('res: ',res);

      this.form.message ='';
 
      if(res.result.message){
        this.form.message = res.result.message;
      }
      if(!res.success){
       this.form.inputerror = res.result.inputerror ;
      }
    })
  }
  cancel(){
    localStorage.clear();
    this.router.navigateByUrl('user');
  }
}
