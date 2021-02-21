import { Component, OnInit } from '@angular/core';
import { Employe } from '../Employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../services/employe.service';
import { TableListComponent } from '../table-list/table-list.component';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss']
})
export class UpdateEmployeComponent implements OnInit {

  id: number;
  employe: Employe;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeService) { }

  ngOnInit() {
    this.employe = new Employe();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmploye(this.id)
      .subscribe(data => {
        console.log(data)
        this.employe = data;
      }, error => console.log(error));
  }

  updateEmploye() {
    this.employeeService.updateEmploye(this.id, this.employe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employe = new Employe();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmploye();
  }

  gotoList() {
    this.router.navigate(['/table-list']);
  }

}
