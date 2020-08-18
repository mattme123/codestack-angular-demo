import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnComponent } from './components/btn/btn.component';


@NgModule({
  declarations: [
    BtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BtnComponent
  ]
})
export class SharedModule { }
