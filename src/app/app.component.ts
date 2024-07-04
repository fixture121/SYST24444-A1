import { Component } from '@angular/core';
import { Personal, About, Socials, Projects, Footer } from './setups';
import projectdata from '../assets/data/projects.json';
import contentdata from '../assets/data/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent {
  // Declared variables to hold data to pass to child components
  mydata: Personal = contentdata.personal;
  about: About = contentdata.about;
  links: Socials = contentdata.socials;
  footer: Footer = contentdata.footer;
  projects: Projects[] = projectdata.projects;
    
  // Used a boolean to check if dark mode is enabled
  // Reference: https://dev.to/muhammadawaisshaikh/creating-a-dark-light-toggle-mode-on-your-angular-app-3k83
  isDarkMode: boolean = false;
}
