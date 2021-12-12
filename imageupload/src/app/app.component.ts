import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imageupload';

  constructor(public dialog: MatDialog) {}

  public bulkDeleteElements(){
    console.log("bulk delete function called");
  }
}
