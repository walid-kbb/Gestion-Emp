import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/table-list', title: 'Consulter employées',  icon:'content_paste', class: '' },
  { path: '/user-profil', title: 'Ajouter employé',  icon:'person', class: '' },
  { path: '/dashboard', title: 'Gerer employé',  icon: 'dashboard', class: '' },
  { path: '/update-employe', title: 'Modifier employé',  icon:'person', class: '' },
  { path: '/find-employe', title: 'Rechercher employé',  icon:'person', class: ''},
  { path: '/composant-employe', title:'ComposantEmploye', icon:'person',class:''},
  { path: '/dep-search', title:'DepSearchComponent', icon:'person',class:''}

  


    
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
