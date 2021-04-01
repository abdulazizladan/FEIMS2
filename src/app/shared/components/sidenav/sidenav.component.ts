import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

export interface faculty{
  'name': string,
  'site': string,
  'code': string
}

export interface department{
  'name': string,
  'faculty': string,
  'code': string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.template.html'
})
export class SidenavComponent {

  selectedSite: string;
  selectedFaculty: string;
  selectedDepartment: string;

  sites: string[] = [
    'samaru',
    'kongo'
  ]

  faculties: faculty[] = [
    {
      name: 'law',
      site: 'kongo',
      code: 'law'
    },
    {
      name: 'administration',
      site: 'kongo',
      code: 'adm'
    },
    {
      name: 'sciences',
      site: 'samaru',
      code: 'sci'
    },
    {
      name: 'engineering',
      site: 'samaru',
      code: 'eng'
    },
    {
      name: 'social sciences',
      site: 'samaru',
      code: 'sol'
    }
  ] 

  departments: department[] = [
    {
      name: 'civil law',
      faculty: 'law',
      code: 'cvl'
    },
    {
      name: 'sharia law',
      faculty: 'law',
      code: 'shr'
    },
    { 
      name: 'business administration',
      faculty: 'administration',
      code: 'bsd'
    },
    {
      name: 'public administration',
      faculty: 'administration',
      code: 'pbc'
    },
    {
      name: 'mechanical engineering',
      faculty: 'engineering',
      code: 'mch'
    },
    {
      name: 'civil engineering',
      faculty: 'engineering',
      code: 'cvn'
    },
    {
      name: 'electrical engineering',
      faculty: 'engineering',
      code: 'een'
    },
    {
      name: 'biology',
      faculty: 'sciences',
      code: 'mch'
    },
    {
      name: 'chemistry',
      faculty: 'sciences',
      code: 'chm'
    },
    {
      name: 'mathematics',
      faculty: 'sciences',
      code: 'mth'
    },
    {
      name: 'sociology',
      faculty: 'social sciences',
      code: 'soc'
    },
    {
      name: 'economics',
      faculty: 'social sciences',
      code: 'ecn'
    }
  ]
  
  @Input('items') public menuItems: any[] = [];
  @Input('hasIconMenu') public hasIconTypeMenuItem: boolean;
  @Input('iconMenuTitle') public iconTypeMenuTitle: string;

  constructor( private _router: Router) {}
  ngOnInit() {}

  getFaculties(){
    return this.faculties.filter((fac) => fac.site == this.selectedSite);
  }

  getDepartments(){
    return this.departments.filter((dep) => dep.faculty == this.selectedFaculty);
  }

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }

  navigate(){
    console.log('displaying ' + this.selectedDepartment + ' buildings');
    //this._router.navigateByUrl('127.0.0.1:4200/dashboard/Settings');
  }
}