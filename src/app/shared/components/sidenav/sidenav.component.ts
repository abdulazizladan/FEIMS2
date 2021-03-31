import { Component, OnInit, Input } from '@angular/core';

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
    }
  ] 

  departments: department[] = [
    {
      name: 'civil law',
      faculty: 'law',
      code: 'cvl'
    }
  ]
  
  @Input('items') public menuItems: any[] = [];
  @Input('hasIconMenu') public hasIconTypeMenuItem: boolean;
  @Input('iconMenuTitle') public iconTypeMenuTitle: string;

  constructor() {}
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
}