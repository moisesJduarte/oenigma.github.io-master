import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BePartUsModalComponent } from 'src/app/shared/components/modals/components/be-part-us-modal/be-part-us-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  inviteAFriendForm!: FormGroup;
  isVisibleField = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BePartUsModalComponent>
  ) {
    this.formBuilder();
  }

  ngOnInit(): void {}
  onChangeCheckbox() {
    this.isVisibleField = !this.isVisibleField;
  }
  onSubmit() {
    if (this.inviteAFriendForm.invalid) return;
    const { name, email, memberNum } = this.inviteAFriendForm.value;
    const body = `Info from the web site name: ${name} email: ${email} memberNum: ${memberNum}`;
    window.open(
      `mailto:marketing@oenigma.pt?cc=marketing@oenigma.pt&subject=Mail for marketing@oenigma.pt.com friend suggestion&body=${body}`
    );
    this.dialogRef.close();
  }
  onGetFormController(controller: string): AbstractControl | null {
    return this.inviteAFriendForm.get(controller);
  }
  private formBuilder() {
    const { required, email } = Validators;
    this.inviteAFriendForm = this.fb.group({
      name: new FormControl('', [required]),
      email: new FormControl('', [required, email]),
      memberNum: new FormControl('', []),
    });
  }
}
