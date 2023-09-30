import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nService implements OnInit, OnDestroy {
  langs: string[] = [];
  languageArray = [
    {
      lang: 'es',
      flag: 'assets/icons/espana.png',
    },
    {
      lang: 'en',
      flag: 'assets/icons/united-states.png',
    },

    {
      lang: 'pt',
      flag: 'assets/icons/brasil.png',
    },
  ];
  sub!: Subscription;
  currentLang = new BehaviorSubject<string>('pt');
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    this.translate.addLangs(['en', 'es',]);
    this.langs = this.translate.getLangs();
    this.currentLang.subscribe((lang) => this.translate.use(lang));
  }
  ngOnInit() {}
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
