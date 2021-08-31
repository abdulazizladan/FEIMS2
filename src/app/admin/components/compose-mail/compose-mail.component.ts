import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MailService } from 'app/admin/services/mail.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {

  mailForm: FormGroup;

  constructor( private fb: FormBuilder, private mailService: MailService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.mailForm  = this.fb.group({
      recipient: (['', [Validators.required, Validators.email]]),
      subject: (['', [Validators.required]]),
      body: (['', [Validators.required]])
    })
  }

  submit(): void{
    console.log(this.mailForm.value)
  }

}
