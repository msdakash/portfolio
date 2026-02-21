import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './layout/header/header';
import {Footer} from './layout/footer/footer';
import {Toast} from './shared/components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortfolioApp');
}
