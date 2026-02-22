import {Routes} from '@angular/router';
import {AboutMe} from './features/about-me/about-me';
import {ContactMe} from './features/contact-me/contact-me';
import {Experience} from './features/experience/experience';

export const routes: Routes = [


  {
    path: '', component: AboutMe
  },
  {
    path: 'contact-me', component: ContactMe
  },

  {
    path: 'experiences', component: Experience
  },
  {
    path: "**",
    redirectTo: ''
  }
];
