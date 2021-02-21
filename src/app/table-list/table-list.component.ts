import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../services/employe.service'
import {Employe} from	'../Employe'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  employes: Employe[];

  constructor(private employeService: EmployeService) { }

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


}
