/*
// Converted Personal to an interface
export class Personal {
  assignment!: number;
  first!: string;
  last!: string;
  role!: string;
  motto!: string;
}
*/

export interface Personal {
  assignment: number;
  first: string;
  last: string;
  role: string;
  motto: string;
}

/*
// Converted About to an interface
export class About {
  header!: string;
  subtitle!: string;
  description!: string;
  image!: string;
}
*/

export interface About {
  header: string;
  subtitle: string;
  description: string;
  image: string;
}

/*
// Converted Socials to an interface
export class Socials {
  header!: string;
  linkedIn!: string;
  github!: string;
  name1!: string;
  name2!: string;
}
*/

export interface Socials {
  header: string;
  linkedIn: string;
  github: string;
  name1: string;
  name2: string;
}

/*
// Converted Projects to an interface
export class Projects {
  id!: number;
  header!: string;
  subtitle!: string;
  description!: string;
  image!: string;
}
*/

export interface Projects {
  id: number;
  header: string;
  subtitle: string;
  description: string;
  image: string;
}

/*
// Converted Footer to an interface
export class Footer {
  technologies!: string;
  name!: string;
}
*/

export interface Footer {
  technologies: string;
  name: string;
}