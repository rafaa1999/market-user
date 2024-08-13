import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, SelectComponent, SpinnerComponent],
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
    SpinnerComponent
  ],
})
export class SharedModule {}
