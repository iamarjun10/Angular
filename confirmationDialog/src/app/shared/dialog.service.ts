import { MatConfirmDialogComponent } from './../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: false,
      data: {
        message: msg,
        buttonText: {
          ok: 'Yes',
          cancel: 'No',
        }
      }
    });
  }
}

