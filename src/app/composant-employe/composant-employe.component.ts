import { Component, OnInit } from '@angular/core';
import { Employe } from '../Employe';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { TableListComponent } from '../table-list/table-list.component';

@Component({
  selector: 'app-composant-employe',
  templateUrl: './composant-employe.component.html',
  styleUrls: ['./composant-employe.component.scss']
})
export class ComposantEmployeComponent implements OnInit {

  constructor(private employeService:EmployeService,private router:Router) 
  { }
   
   nbremp : number=0 ;
   nbrdep : number=0 ;
   

  ngOnInit() {
  }

save()
{
this.employeService.addDepart(this.nbremp,this.nbrdep)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
 this.gotoList();
    
}

onSubmit()
{
this.save();
}
gotoList() {
    this.router.navigate(['/table-list']);
  }  

}
