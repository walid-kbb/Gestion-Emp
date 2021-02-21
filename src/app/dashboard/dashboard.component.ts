import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Employe } from '../Employe';
import {EmployeService} from '../services/employe.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private employeService:EmployeService, private router:Router) { }
  
  employes:Employe[]

  ngOnInit() 
  {
    this.reloadData();
  }


  reloadData() 
  {
    this.employeService.getEmployesList().subscribe(
      data => {
        console.log(data);
        this.employes = data;
      },
      err => {
        console.log(err);
      });
  }

   deleteEmploye(id: number) {
    this.employeService.deleteEmploye(id).subscribe(
      data => { console.log(data); this.reloadData(); },
      error => console.log(error));
  }
  employeUpdate(id: number) {
    this.router.navigate(['update', id]);
  }
   


}
