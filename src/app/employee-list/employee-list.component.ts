import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../controller/employee.service';
import { Employee } from '../entity/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router : Router) {
   }

  ngOnInit(): void {
     this.getEmployees();
  }

  employeeDetails(id : number) {
    this.router.navigate(['employee-details', id]);
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id : number){
    this.router.navigate(['update-employee', id]);
  }
  
  deleteEmployee(id : number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
}