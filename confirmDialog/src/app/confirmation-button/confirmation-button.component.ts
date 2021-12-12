import { Component, Input, OnInit, TemplateRef, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openModal(templateRef: TemplateRef<any>) {
    let dialogRef = this.dialog.open(templateRef, {
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.onConfirmed.emit();
      }else{
        this.onCancelled.emit();
      }
    });
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
