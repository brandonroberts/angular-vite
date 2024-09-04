import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Vite + Angular</h2>

    <br /><br/>

    <button (click)="increment()">Count {{ count() }}</button>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `
})
export class AppComponent {
  count = signal(0);

  increment() {
    this.count.update(cnt => ++cnt);
  }
}