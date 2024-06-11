import { Component } from '@angular/core';
import { Personal, About, Socials, Projects, Footer } from './setups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment 2';
  mydata: Personal = {
    assignment: 2,
    first: 'Toufiq',
    last: 'Charania',
    role: 'Student',
    motto: 'Motto: YOLO, You Only Live Once',
  };
  about: About = {
    header: 'About Me:',
    // Used string interpolation inside subtitle - Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    subtitle: `My name is ${this.mydata.first}, and I am a second-year SNDE student at Sheridan College.`,
    description:
      'I am excited to be learning about Angular, especially after learning React.js at my previous co-op!',
    image: 'assets/images/photo-2.jpg',
  };
  links: Socials = {
    header: 'Connect With Me!',
    linkedIn: 'https://www.linkedin.com/in/toufiqcharania/',
    github: 'https://github.com/fixture121',
    name1: 'Github',
    name2: 'LinkedIn',
  };
  projects: Projects[] = [
    {
      id: 1,
      header: 'Online Bookstore',
      subtitle:
        'An online bookstore where users can browse books, create an account, and add books to their shopping cart.',
      description:
        'Technologies Used: Java, Spring Boot, HTML, CSS, JavaScript',
      image: '',
    },
    {
      id: 2,
      header: 'Portfolio Website',
      subtitle: 'A website to showcase my projects.',
      description: 'Technologies Used: HTML, CSS, JavaScript',
      image: 'assets/images/portfolio-website.png',
    },
    {
      id: 3,
      header: 'War Game',
      subtitle: 'A Java-based card game where the highest card wins the round.',
      description: 'Technologies Used: Java',
      image: 'assets/images/project-3.png',
    },
    {
      id: 4,
      header: 'Stock Portfolio',
      subtitle:
        'A Java Spring Boot application where users can add stocks to their stock portfolio using a Yahoo! Finance API.',
      description:
        'Technologies Used: Java, Spring Boot, HTML, CSS, JavaScript',
      image: '',
    },
    {
      id: 5,
      header: 'To-Do List',
      subtitle:
        ' A simple to-do list where users can add tasks to their list, check-off completed tasks, and delete tasks from the list. List remains persistent by saving to local storage.',
      description: 'Technologies Used: React.js, CSS',
      image: 'assets/images/project-5.png',
    },
  ];
  footer: Footer = {
    technologies:
      'Technologies Used for this Assignment: Angular, TypeScript, HTML, CSS',
    name: `Made By: ${this.mydata.first} ${this.mydata.last}`,
  };
}
