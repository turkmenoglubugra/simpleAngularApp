import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../controller/employee.service';
import { Employee } from '../entity/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id : number;
  employee : Employee;

  constructor(private route : ActivatedRoute,
    private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    
    this.employeeService.getEmployeeId(this.id).subscribe(data => {
      this.employee = data;
    });
  }

}
