import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [HeaderComponent, SelectComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    BrowserModule,
    SelectComponent,
    RouterModule,
    FormsModule,
  ],
})
export class SharedModule {}
