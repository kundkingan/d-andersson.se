import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects = [
    {
      type: 'Web Application',
      name: 'Online Resume',
      link: 'https://maintenance.d-andersson.se',
      tech: ['Angular', 'Firebase', 'SCSS']
    },
    {
      type: 'Progressive Web Application',
      name: 'Weight Tracker',
      link: 'https://maintenance.d-andersson.se',
      tech: ['Angular', 'Firebase', 'SCSS']
    },
    {
      type: 'Progressive Web Application',
      name: 'Crypto Tracker',
      link: 'https://maintenance.d-andersson.se',
      tech: ['Angular', 'Firebase', 'SCSS', 'NodeJS']
    }
  ];

  onProject(link) {
    window.open(link, '_blank');
  }
}
