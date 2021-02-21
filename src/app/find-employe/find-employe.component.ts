import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../services/employe.service'
import {Employe} from	'../Employe'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-find-employe',
  templateUrl: './find-employe.component.html',
  styleUrls: ['./find-employe.component.scss']
})
export class FindEmployeComponent implements OnInit {
  nom : string ;
  employe: Employe;
  employes: Employe[];
  checked : boolean;
  ckecked =false;
  submitted=false;


  constructor(private employeService:EmployeService,private route: ActivatedRoute, private router: Router) 
  { 

  }

  ngOnInit() 
  {
    
    this.employes = new Employe()[0];

  }





    findByName(){
      this.submitted=true;
      if(this.checked==true)
      {
      this.employeService.findByName(this.nom).subscribe(
      data => {
        console.log(data);
        this.employes = data;
      },
      err => {
        console.log(err);
      });
 
      }
     
      else
      {
      this.employeService.findByName_like(this.nom).subscribe(
      data => {
        console.log(data);
        this.employes = data;
      },
      err => {
        console.log(err);
      });
      }
     

      }
    




  

}
