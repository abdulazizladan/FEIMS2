import { Component, OnInit } from '@angular/core';
import { MailService } from 'app/admin/services/email.service';

export interface Mail{
  subject: string,
  recipient: string,
  date: string
}

const MAILS: Mail[] = [
  { "subject": "Re: Facilities status update", "recipient": "abdulazizladan@gmail.com", "date": "2021-08-26"}
]

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.scss']
})
export class SentMessagesComponent implements OnInit {

  displayedColumns: string[] = ['subject', 'recipient', 'date'];
  dataSource = MAILS;

  constructor( private mailService: MailService) { }

  ngOnInit(): void {
  }

}
