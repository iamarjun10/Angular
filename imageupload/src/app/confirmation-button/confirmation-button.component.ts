import { Component, Input, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'iazi-confirmation-button-material',
  templateUrl: './confirmation-button.component.html',
  styleUrls: ['./confirmation-button.component.scss'],
})
export class ConfirmationButtonComponent implements OnInit {
  
  @Input() public btnType = '';
  @Input() public btnClass = '';
  @Input() public btnString: string = '';
  @Input() public titleString: string = '';
  @Input() public contentString: string = '';
  @Input() public actionConfirmString: string = '';
  @Input() public actionCancelString: string = '';
  @Input() public actionClass: string = '';

  @Output() public onConfirmed = new EventEmitter();
  @Output() public onCancelled = new EventEmitter();
  
  constructor(public dialog: MatDialog,
    private pictureUploaderDialogRef: MatDialogRef<ConfirmationButtonComponent>) {}

  ngOnInit(): void {}

  public openModal(templateRef: TemplateRef<any>) {
    this.pictureUploaderDialogRef = this.dialog.open(templateRef, {
      // data: { name: this.name, animal: this.animal }
    });
    
    // this.pictureUploaderDialogRef.afterClosed().subscribe((result) => {
    //   if(result){
    //     this.onConfirmed.emit();
    //   }else{
    //     this.onCancelled.emit();
    //   }
    // });
  }

  public closeModal(){
    console.log(this.pictureUploaderDialogRef);
    
    console.log(this.pictureUploaderDialogRef.getState());

    if(this.pictureUploaderDialogRef){
      this.pictureUploaderDialogRef.close()
      if(this.pictureUploaderDialogRef){
        console.log("if part");
        console.log(this.pictureUploaderDialogRef.getState());
        if(this.pictureUploaderDialogRef.getState() === 1)
        {
          console.log("hurrrayyyyy");
        }
        if(this.pictureUploaderDialogRef.getState() === 0)
        {
          console.log("noooo  hurrrayyyyy");
        }
      }else{
        console.log("else part");
      }
      
    }
  }
  
  // public confirm(): void {
  //   this.onConfirmed.emit();
  //   this.confirmationModal.hide();
  // }

  // public cancel(): void {
  //   this.onCancelled.emit();
  //   this.confirmationModal.hide();
  // }
}
