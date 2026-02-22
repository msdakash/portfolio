import {Routes} from '@angular/router';
import {AboutMe} from './features/about-me/about-me';
import {ContactMe} from './features/contact-me/contact-me';
import {Experience} from './features/experience/experience';
import {Skills} from './features/skills/skills';
import {Education} from './features/education/education';
import {Projects} from './features/projects/projects';

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
    path: 'skills', component: Skills
  },
  {
    path: 'education', component: Education
  },
  {
    path: 'projects', component: Projects
  },
  {
    path: "**",
    redirectTo: ''
  }
];
