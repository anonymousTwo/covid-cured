import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule],
})
export class AngularMaterialModule { }
