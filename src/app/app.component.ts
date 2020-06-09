import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidCured';
  showSideNav: boolean = false;

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
