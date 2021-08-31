import { Component, OnInit } from '@angular/core';
import { MailService } from 'app/admin/services/mail.service';

export interface Mail{
  subject: string,
  recipient: string,
  date: string
}

const MAILS: Mail[] = [
  { "subject": "Facilities status update", "recipient": "abdulazizladan@gmail.com", "date": "2021-08-24"},
  { "subject": "New Generator", "recipient": "danielolayinka@yahoo.com", "date": "2021-07-24"}
]
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'recipient', 'date'];
  dataSource = MAILS;

  constructor( private mailService: MailService) { }

  ngOnInit(): void {
  }

}
