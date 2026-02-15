import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'pf-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private readonly router = inject<Router>(Router)
  private readonly THEME_KEY = 'theme';

  public isDarkMode = false;
  public isMenuOpen = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'dark') {
      this.applyDark();
    } else if (savedTheme === 'light') {
      this.applyLight();
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        this.applyDark();
      } else {
        this.applyLight();
      }
    }
  }

  private applyDark(): void {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    this.isDarkMode = true;
    localStorage.setItem(this.THEME_KEY, 'dark');
  }

  private applyLight(): void {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    this.isDarkMode = false;
    localStorage.setItem(this.THEME_KEY, 'light');
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public isActive(route: string): boolean {
    return this.router.url === route;
  }

  public redirectToHome() {
    this.router.navigate(["/"])
  }

  public toggleTheme(): void {
    if (this.isDarkMode) {
      this.applyLight();
    } else {
      this.applyDark();
    }
  }

}

