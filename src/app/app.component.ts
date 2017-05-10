import { Component, Injectable } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
@Injectable()
export class AppComponent {
  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}