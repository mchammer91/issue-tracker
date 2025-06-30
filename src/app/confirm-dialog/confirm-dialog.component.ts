import { Component, input, output } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {

  issueNo = input<number>();
  confirm = output<boolean>();

  constructor(private dialog: MatDialog) {}

  agree() {
    this.confirm.emit(true);
  }

  disagree() {
    this.confirm.emit(false);
  }
}
