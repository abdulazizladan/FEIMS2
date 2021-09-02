import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { EmailService } from 'app/admin/services/email.service';
import {MatTableDataSource} from '@angular/material/table';
import { Mail } from 'app/admin/models/mail.model';

const MAILS: Mail[] = [
  { "_id": "124jnkdf34423", "subject": "Facilities status update", "recipient": ["abdulazizladan@gmail.com"], "date": '2019-06-11T00:00'},
  { "_id": "rj983499i13", "subject": "New Generator", "recipient": ["danielolayinka@yahoo.com"], "date": '2019-06-11T00:00'}
]
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  selection = new SelectionModel<Mail>(true, []);
  displayedColumns: string[] = ['_id', 'subject', 'recipient', 'date'];
  dataSource = new MatTableDataSource<Mail>(MAILS)

  constructor( private mailService: EmailService) { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Mail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row._id + 1}`;
  }

}
