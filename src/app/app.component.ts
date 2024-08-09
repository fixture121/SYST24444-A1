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
