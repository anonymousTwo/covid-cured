import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStoryComponent } from './view-story/view-story.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewStoryComponent
  }
];

@NgModule({
  declarations: [ViewStoryComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewStoryModule { }
