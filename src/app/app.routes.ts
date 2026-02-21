import {Routes} from '@angular/router';
import {App} from './app';
import {AboutMe} from './features/about-me/about-me';
import {ContactMe} from './features/contact-me/contact-me';

export const routes: Routes = [


  {
    path: '', component: AboutMe
  },
  {
    path: 'contact-me', component: ContactMe
  },
  {
    path: "**",
    redirectTo: ''
  }
];
