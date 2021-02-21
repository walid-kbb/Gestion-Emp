import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../services/employe.service'
import {Employe} from	'../Employe'

@Component({
  selector: 'app-dep-search',
  templateUrl: './dep-search.component.html',
  styleUrls: ['./dep-search.component.scss']
})
export class DepSearchComponent implements OnInit {
  depnom : string ;
  employe: Employe;
  employes: Employe[];
  submitted=false;

  constructor(private employeService:EmployeService) 
  { 

  }
  ngOnInit() {
  }

  findByName(){
    this.submitted=true;
    this.employeService.findEmpByDep(this.depnom).subscribe(
      data => {
        console.log(data);
        this.employes = data;
      },
      err => {
        console.log(err);
      });
 
  }


}
