import { Component, OnInit } from '@angular/core';
import { Employe } from '../Employe';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { TableListComponent } from '../table-list/table-list.component';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfileComponent implements OnInit {

   employe: Employe = new Employe();
   submitted = false;


  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
  }

   newEmployee(): void {
    this.submitted = false;
    this.employe = new Employe();
  }

  save() {
    this.employeService.saveEmploye(this.employe)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.employe = new Employe();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/table-list']);
  }

}
