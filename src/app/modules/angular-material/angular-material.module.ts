import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ], exports: [
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
