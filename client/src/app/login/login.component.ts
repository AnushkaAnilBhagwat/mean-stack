import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  newUser = {
    email: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login() {
    this.http.post('http://localhost:3000/users/login', this.newUser).subscribe({
      next: (res: any) => {
        this.router.navigate(['employees']);
      },
      error: (error: any) => {

      }
    })
  }

}
