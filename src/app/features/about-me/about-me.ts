import {Component, inject} from '@angular/core';
import {TypedTextComponent} from '../../shared/components/typed-text/typed-text';
import {Router} from '@angular/router';

@Component({
  selector: 'pf-about-me',
  imports: [
    TypedTextComponent
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  private readonly router = inject<Router>(Router)

  public words: string[] = [
    "Frontend Engineer",
    "Angular Specialist",
    "React Developer",
    "Frontend Engineer with Full-Stack Experience",
    "Building High-Performance Web Applications"
  ]

  public navigateToContactMe(): void {
    this.router.navigate(['contact-me']);

    return
  }
}
