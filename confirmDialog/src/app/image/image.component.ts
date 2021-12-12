import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'iazi-image-input-field',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
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

}
