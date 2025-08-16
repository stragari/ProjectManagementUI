// import { platformBrowser, bootstrapApplication  } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';

// platformBrowser().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true,
// }).catch(err => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//   ]
// }).catch(err => console.error(err));

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));