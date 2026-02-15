import {Component} from '@angular/core';
import {TypedTextComponent} from '../../shared/components/typed-text/typed-text';

@Component({
  selector: 'pf-about-me',
  imports: [
    TypedTextComponent
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  public words: string[] = [
    "Frontend Engineer",
    "Angular Specialist",
    "React Developer",
    "Frontend Engineer with Full-Stack Experience",
    "Building High-Performance Web Applications"
  ]
}
