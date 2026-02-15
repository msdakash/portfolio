import {Routes} from '@angular/router';
import {App} from './app';
import {AboutMe} from './features/about-me/about-me';

export const routes: Routes = [


  {
    path: '', component: AboutMe
  },
  {
    path: "**",
    redirectTo: ''
  }
];
