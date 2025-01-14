import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: any = {
    data: {},
    message: '',
    inputerror: {}
  }

  constructor(private httpClient: HttpClient) {

  }

  signUp() {
    this.httpClient.post('http://localhost:8080/Auth/signUp', this.form.data).subscribe((res: any) => {
      console.log('res: ', res);

      this.form.message = '';
      this.form.inputerror = {};

      if (res.result.message) {
        this.form.message = res.result.message;
      }

      if (!res.success) {
        this.form.inputerror = res.result.inputerror;
      }
    })
  }

}