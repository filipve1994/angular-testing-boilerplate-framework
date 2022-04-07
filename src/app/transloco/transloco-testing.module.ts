import { TranslocoTestingModule, TranslocoTestingOptions } from '@ngneat/transloco';
import en from '../../assets/i18n/en.json';
import nl from '../../assets/i18n/nl.json';
import fr from '../../assets/i18n/fr.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, nl, fr },
    translocoConfig: {
      availableLangs: ['en', 'nl', 'fr'],
      defaultLang: 'en',
      reRenderOnLangChange: true
    },
    preloadLangs: true,
    ...options
  });
}
