// import { Component, OnInit } from '@angular/core';
// import { Personal, About, Socials, Projects, Footer } from './setups';
// import projectdata from '../assets/data/projects.json';
// import contentdata from '../assets/data/content.json';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css', '../styles.css'],
// })
// export class AppComponent implements OnInit {
//   // Declared variables to hold data to pass to child components
//   mydata: Personal = contentdata.personal;
//   about: About = contentdata.about;
//   links: Socials = contentdata.socials;
//   footer: Footer = contentdata.footer;
//   projects: Projects[] = projectdata.projects;
    
//   // Used a boolean to check if dark mode is enabled
//   // Reference: https://dev.to/muhammadawaisshaikh/creating-a-dark-light-toggle-mode-on-your-angular-app-3k83
//   isDarkMode: boolean = false;

//   constructor(private http: HttpClient) {}

//   getLocal() {}
//   getRemote(pick: string) {}

//   ngOnInit() {
//     this.getLocal();
//     this.getRemote('1');
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Personal, About, Socials, Projects, Footer } from './setups';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent implements OnInit {
  mydata: Personal = {} as Personal;
  about: About = {} as About;
  links: Socials = {} as Socials;
  footer: Footer = {} as Footer;
  projects: Projects[] = [];
    
  isDarkMode: boolean = false;

  private personalUrl = 'assets/data/content.json';
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  // Fetch local data from JSON file
  getLocal() {
    this.http.get<{ personal: Personal, about: About, socials: Socials, footer: Footer }>(this.personalUrl)
      .subscribe(data => {
        this.mydata = data.personal;
        this.about = data.about;
        this.links = data.socials;
        this.footer = data.footer;
        console.log('Local data:', { mydata: this.mydata, about: this.about, links: this.links, footer: this.footer });
      });
  }

  // Fetch remote data from HTTP
  getRemote(pick: string) {
    this.http.get<Projects[]>(this.projectsUrl)
      .subscribe(data => {
        this.projects = data;
        console.log('Remote data:', this.projects);
      });
  }

  ngOnInit() {
    this.getLocal();
    this.getRemote('1');
  }
}
