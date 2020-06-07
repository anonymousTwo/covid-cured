import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ListModule { }
