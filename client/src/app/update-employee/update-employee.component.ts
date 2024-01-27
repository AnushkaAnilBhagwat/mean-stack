import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent {

  id: any;
  employee = {
    lastName: '',
    firstName: '',
  }


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      this.employee.firstName = params['firstName'];
      this.employee.lastName = params['lastName'];
      console.log(this.employee.firstName);
      console.log(this.employee.lastName);


    });
  }

  updateEmployee(){
    this.http.put('http://localhost:3000/employees/' + this.id, this.employee).subscribe({
    next: (res: any) => {
      console.log(res);
      this.router.navigate(['/employees']);
    },
    error: (err) => {
      console.log(err);
    },
    })
  }
}
