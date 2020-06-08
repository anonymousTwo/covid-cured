import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-story-entry',
  templateUrl: './story-entry.component.html',
  styleUrls: ['./story-entry.component.scss']
})
export class StoryEntryComponent implements OnInit {

  storyForm: FormGroup;

  @ViewChild('successTemplate') successTemplate: TemplateRef<any>;

  constructor(
    private readonly fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.storyForm = this.fb.group({
      name: [undefined, []],
      isAnonymous: [undefined, []],
      email: [undefined, []],
      mobile: [undefined, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      location: [undefined, [Validators.required]],
      title: [undefined, [Validators.required]],
      story: [undefined, [Validators.required]],
      files: [undefined, []]
    });
  }

  onSubmit() {
    console.log(this.storyForm.value);
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.successTemplate, {
      data: {storyId: new Date().getTime()}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNameChange(evt) {
    const nameControl = this.storyForm.get('name');
    const anonymousControl = this.storyForm.get('isAnonymous');
    if (nameControl.value) {
      anonymousControl.setValue(undefined);
      anonymousControl.disable();
    } else {
      anonymousControl.setValue(undefined);
      anonymousControl.enable();
    }
  }

  onAnonymousChange(evt) {
    if (evt) {
      const nameControl = this.storyForm.get('name');
      if (evt.checked) {
        nameControl.setValue(undefined);
        nameControl.disable();
      } else {
        nameControl.setValue(undefined);
        nameControl.enable();
      }
    }
  }

}
