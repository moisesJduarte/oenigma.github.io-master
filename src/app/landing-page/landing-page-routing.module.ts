import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalsComponent } from '../shared/components/modals/modals.component';
import { LandingPageComponent } from './landing-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: LandingPageComponent,
      },
      {
        path: 'friend-referral',
        component: ModalsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
