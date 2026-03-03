export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Project {
  name: string;
  description: string;
  link?: string;
}

export interface Certification {
  name: string;
  hours: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  experiences: Experience[];
  education: Education[];
  skills: {
    technical: string[];
    soft: string[];
  };
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  differentials: string[];
}
