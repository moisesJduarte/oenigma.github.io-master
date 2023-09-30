import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PaypalModalFormComponent } from 'src/app/shared/components/modals/components/paypal-modal-form/paypal-modal-form.component';
@Component({
  selector: 'app-paypay-form',
  templateUrl: './paypay-form.component.html',
  styleUrls: ['./paypay-form.component.scss'],
})
export class PaypayFormComponent implements OnInit {
  genders = ['male', 'female'];
  paypalForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PaypalModalFormComponent>
  ) {
    this.formBuild();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.paypalForm.valid) return;
    const { name, birthday, whatsapp, id, assistantCode, gender } =
      this.paypalForm.value;
    const body = `Info from the web site name: ${name} birthday: ${birthday} whatsapp: ${whatsapp} id: ${id} code: ${assistantCode} gender: ${gender}`;
    window.open(
      `mailto:marketing@oenigma.pt?cc=marketing@oenigma.pt&subject=Mail for marketing@oenigma.pt.com&body=${body}`
    );
    this.dialogRef.close();
  }

  getControl(control: string) {
    return this.paypalForm.get(control);
  }

  private formBuild(): void {
    const { required } = Validators;
    this.paypalForm = this.fb.group({
      name: new FormControl('', [required]),
      birthday: new FormControl('', [required]),
      id: new FormControl('', [required]),
      whatsapp: new FormControl('', required),
      assistantCode: new FormControl('', required),
      gender: new FormControl('male'),
    });
  }
}
