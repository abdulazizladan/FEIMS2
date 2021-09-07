import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

interface notifications{
  recipient: string[],
  description: string,
  body: string,
  date: string
}

const NOTIFICATIONS: notifications[] = [
  {"recipient": ["08099764693"], "description": "status update request", "body": "Please generate and submit an assessment of Kainji Theatre.", "date": "Aug 1"},
  {"recipient": ["08099764693"], "description": "status update request", "body": "Please generate and submit an assessment of Wolfson Theatre.", "date": "Aug 1"},
  {"recipient": ["08099764693"], "description": "status update request", "body": "Please generate and submit an assessment of FSLT 1.", "date": "Aug 1"},
  {"recipient": ["08099764693"], "description": "status update request", "body": "Please generate and submit an assessment of Sickbay windows and doors.", "date": "Aug 1"}
]

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public form: FormGroup;

  selectedRecipient: string;

  doStuff() {
    console.log('Stuff')
  }

  displayedColumns: string[] = ['recipient', 'description', 'body', 'date'];
  dataSource = NOTIFICATIONS;

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * first lifecycle hook
   */
  ngOnInit(): void {
    this.initializeForm()
  }

  /**
   * Initialize form
   */
  initializeForm(): void{
    this.form = this.fb.group({
      recipient: (['', [Validators.required]]),
      other: (['']),
      description: (['', [Validators.required, Validators.minLength(5)]]),
      body: (['', [Validators.required, Validators.minLength(5)]])
    })
  }

}
