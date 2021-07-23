import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../controller/employee.service';
import { Employee } from '../entity/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id : number;
  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeId(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error)); 
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
