import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './UI/button/button.component';
import { ButtonPrimaryComponent } from './UI/button-primary/button-primary.component';
import { MaterialModule } from './material/material.module';
import { ModalsComponent } from './components/modals/modals.component';
import { BePartUsModalComponent } from './components/modals/components/be-part-us-modal/be-part-us-modal.component';
import { FormComponent } from '../landing-page/components/be-part-us/components/form/form.component';
import { PaypalModalComponent } from './components/modals/components/paypal-modal/paypal-modal.component';
import { PaypalModalFormComponent } from './components/modals/components/paypal-modal-form/paypal-modal-form.component';
import { PaypayFormComponent } from '../landing-page/components/paypay-form/paypay-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/modals/components/success/success.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ButtonPrimaryComponent,
  ButtonComponent,
  FormComponent,
  PaypalModalFormComponent,
  ModalsComponent,
  BePartUsModalComponent,
  PaypayFormComponent,
  PaypalModalComponent,
];
const modules = [
  TranslateModule,
  RouterModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...components,
    PaypalModalFormComponent,
    ModalsComponent,
    BePartUsModalComponent,
    PaypalModalComponent,
    SuccessComponent,
  ],
  imports: [CommonModule, ...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
