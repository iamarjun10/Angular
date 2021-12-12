import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrencyPipe } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationButtonComponent } from "./confirmation-button/confirmation-button.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './image/image.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from "@angular/material/select";
import { Ng2fileuploadComponent } from './ng2fileupload/ng2fileupload.component';
import {FileUploadModule} from 'ng2-file-upload';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationButtonComponent,
    ImageComponent,
    FileuploadComponent,
    Ng2fileuploadComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    FileUploadModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
