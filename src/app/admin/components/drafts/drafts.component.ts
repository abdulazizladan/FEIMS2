import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/admin/services/email.service';

export interface Mail{
  subject: string,
  recipient: string,
  date: string
}

const MAILS: Mail[] = [
  { "subject": "Request for site status update", "recipient": "abdulazizladan@gmail.com", "date": "2021-08-24"},
  { "subject": "Request for building status update", "recipient": "abdulazizladan@gmail.com", "date": "2021-08-24"},
  { "subject": "Request for equipment status update", "recipient": "abdulazizladan@gmail.com", "date": "2021-08-24"}
]

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'recipient', 'date'];
  dataSource = MAILS;

  constructor( private mailService: EmailService) { }

  ngOnInit(): void {
  }

}
