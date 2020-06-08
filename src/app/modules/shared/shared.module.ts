import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchStoryIdDialogComponent } from './components/fetch-story-id-dialog/fetch-story-id-dialog.component';

@NgModule({
  declarations: [FetchStoryIdDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [FetchStoryIdDialogComponent]
})
export class SharedModule { }
