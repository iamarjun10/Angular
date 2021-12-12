import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'iazi-image-input-field',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  value: string = 'a.jpeg'
  public isPictureUploading = false;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];

  ngOnInit(): void {
  }

  public openPictureUploader(templateRef: TemplateRef<any>): void {
          let dialogRef = this.dialog.open(templateRef, { });
    
}

public closeModal(){
  this.dialog.closeAll();
}

selectFiles(event: any): void {
  this.message = [];
  this.progressInfos = [];
  this.selectedFileNames = [];
  this.selectedFiles = event.target.files;

  this.previews = [];
  if (this.selectedFiles && this.selectedFiles[0]) {
    const numberOfFiles = this.selectedFiles.length;
    for (let i = 0; i < numberOfFiles; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.previews.push(e.target.result);
      };

      reader.readAsDataURL(this.selectedFiles[i]);

      this.selectedFileNames.push(this.selectedFiles[i].name);
    }
  }
}
}
