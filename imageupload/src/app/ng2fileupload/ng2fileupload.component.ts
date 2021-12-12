import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-ng2fileupload',
  templateUrl: './ng2fileupload.component.html',
  styleUrls: ['./ng2fileupload.component.scss']
})
export class Ng2fileuploadComponent implements OnInit {

  imageUrl:string = '';
  public uploader: FileUploader = new FileUploader({
    url: this.imageUrl, itemAlias: 'picture'
  });

  constructor() { }

  ngOnInit(): void {

    this.uploader.onAfterAddingFile = (File)=>{
      File.withCredentials = false;
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, header: any)=>{
      console.log('uploaded sucessfully...', status);
    }
  }

}
