import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private url_get = "http://localhost:8080/list";
  private url_get_emp = "http://localhost:8080/employe/";
  private url_add = "http://localhost:8080/add";
  private url_upd = "http://localhost:8080/update/";
  private url_del = "http://localhost:8080/delete/";
  private url_find = "http://localhost:8080/employeName/";
  private url_find_like = "http://localhost:8080/employeName_like/";
  private url_add_depart = "http://localhost:8080/add_depart/";
  private url_get_empbydep = "http://localhost:8080/emp_depart/";

  constructor(private http: HttpClient) { }

  getEmployesList(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url_get);
  }

  getEmploye(id: number): Observable<Employe> {
    return this.http.get<Employe>(this.url_get_emp + id);
  }

  saveEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.url_add, employe);
  }

  updateEmploye(id: number, employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.url_upd + id, employe);
  }

  deleteEmploye(id: number): Observable<string> {
    return this.http.delete<string>(this.url_del + id);
  }

  findByName(nom: string): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url_find + nom);
  }

  findByName_like(nom: string): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url_find_like + nom);
  }

  addDepart(nbremp :number,nbrdep :number): Observable<Employe[]> {
        return this.http.post(this.url_add_depart+nbremp+'/'+nbrdep);

  }

  findEmpByDep(depnom: string): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url_get_empbydep + depnom);
  }

}
