import { DialogService } from './shared/dialog.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'confirmationDialog';
  checkBoxValue: boolean = false;
  constructor(private dialog: MatDialog,
    private dialogService: DialogService){

  }

  public openConfirmDialog(){
    this.dialogService.openConfirmDialog('Are you sure you want to delete this?')
    .afterClosed().subscribe(res=> {
      if(res){
        console.log("delete");
      }
      else{
        console.log("do not delete");
      }
    });
  }

  // openConfirmDialog(){
  //   const dialogRef = this.dialog.open(MatConfirmDialogComponent,{
  //     data:{
  //       message: 'Are you sure you want to delete this?',
  //       buttonText: {
  //         ok: 'Yes',
  //         cancel: 'No'
  //       }
  //     }
  //   });
  // }


  public unCheckAll(){
    this.checkBoxValue=false;
  }

}
