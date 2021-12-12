import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css'],
})
export class MatConfirmDialogComponent implements OnInit {
  message: string = '';
  confirmButtonText = '';
  cancelButtonText = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MatConfirmDialogComponent>
  ) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

  // message: string = ""
  // cancelButtonText = "Cancel"
  // constructor(
  //   @Inject(MAT_DIALOG_DATA) private data: any,
  //   private dialogRef: MatDialogRef<MatConfirmDialogComponent>) {
  //   if (data) {
  //     this.message = data.message || this.message;
  //     if (data.buttonText) {
  //       this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
  //     }
  //   }
  //   this.dialogRef.updateSize('300vw','300vw')
  // }

  // onConfirmClick(): void {
  //   this.dialogRef.close(true);
  // }
}
