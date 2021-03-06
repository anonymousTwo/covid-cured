import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryEntryComponent } from './story-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StoryEntryComponent
  }
];

@NgModule({
  declarations: [StoryEntryComponent],
  imports: [
    CommonModule,
    QuillModule,
    SharedModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class StoryEntryModule { }
