import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { BePartUsComponent } from './components/be-part-us/be-part-us.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LayoutComponent,
    HeroComponent,
    WhoAreWeComponent,
    WhyUsComponent,
    BePartUsComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    TranslateModule,
  ],
})
export class LandingPageModule {}
