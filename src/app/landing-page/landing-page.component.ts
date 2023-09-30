import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { I18nService } from '../core/services/i18n.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  langSub!: Subscription;
  constructor(private translate: TranslateService, public i18n: I18nService) { }
  

  ngOnInit(): void {
    this.onLanguageInUse()
  }
  onLanguageInUse() {
    this.langSub = this.i18n.currentLang.subscribe((lang) =>
      this.translate.use(lang)
    );
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }

}
