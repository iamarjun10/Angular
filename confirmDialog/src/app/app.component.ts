import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'confirmDialog';

  constructor(public dialog: MatDialog) {}
  
//   public openDialog() {
//     const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       console.log(result);
//     });
//   }
  
//   openModal(templateRef: TemplateRef<any>) {
//     let dialogRef = this.dialog.open(templateRef, {
         
//          // data: { name: this.name, animal: this.animal }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//         console.log(result);
//         // this.animal = result;
//     });
// }

 public bulkDeleteElements(){
   console.log("bulk delete function called");
 }

}
