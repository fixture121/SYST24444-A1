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

  // URLs to get JSON data
  private personalUrl = 'assets/data/content.json';
  private projectsUrl = 'assets/data/projects.json';

  // Injects HttpClient for http requests
  constructor(private http: HttpClient) {}

  // Gets local data from JSON file
  getLocal() {
    /*
     * http.get() fetches data from JSON file from the URL
     * Fetched data is mapped to the interface
     * Reference: https://stackoverflow.com/questions/44042223/load-json-content-from-a-local-file-with-http-get-in-angular-2
     */
    this.http.get<{ personal: Personal, about: About, socials: Socials, footer: Footer }>(this.personalUrl)
      .subscribe(data => {
        // Stores fetched data to local variables
        this.mydata = data.personal;
        this.about = data.about;
        this.links = data.socials;
        this.footer = data.footer;
        console.log("using local data")
      });
  }

  // Gets remote data from JSON file
  getRemote(pick: string) {
    // Fetched data from JSON file
    this.http.get<Projects[]>(this.projectsUrl)
      .subscribe(data => {
        // Stores fetched data to local variable
        this.projects = data;
        console.log("using remote data");
      });
  }

  // Calls getLocal() and getRemote() during component initialization
  ngOnInit() {
    this.getLocal();
    this.getRemote('1');
  }
}
