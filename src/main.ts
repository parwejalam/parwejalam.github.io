import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { register } from 'swiper/element/bundle';

register();

// AOS is initialized in AppComponent after the view renders, so its
// scroll positions are calculated against the real, laid-out DOM.

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
