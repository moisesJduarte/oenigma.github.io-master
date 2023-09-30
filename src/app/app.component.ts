import { Component } from '@angular/core';
import { HelpersService } from './shared/services/helpers.service';
import keys from './shared/constants/keys';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private helpersService: HelpersService,
    translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('pt');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pt');
  }
  theme = this.helpersService.getLocalStorage(
    keys.localStorage.darkMode,
    'dark'
  );
  ngOnInit(): void {
    this.onSetDarkMode();
  }

  onSetDarkMode() {
    this.helpersService.setLocalStorage(keys.localStorage.darkMode, this.theme);
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  onToggleDarkMode(themeDark: string) {
    localStorage.theme = themeDark;
    document.documentElement.classList.add('dark');
  }
  onToggleLightMode(themeLight: string) {
    localStorage.theme = themeLight;
    document.documentElement.classList.remove('dark');
  }
}
