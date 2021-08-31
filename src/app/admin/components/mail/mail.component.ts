import { Component, OnInit } from '@angular/core';
import { ComposeMailComponent } from '../compose-mail/compose-mail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ComposeMailComponent, {
      width: '1200px'
    })
  }

}
