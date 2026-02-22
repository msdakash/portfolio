import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills  implements AfterViewInit{
  @ViewChildren('tiltCard') tiltCards!: QueryList<ElementRef>;
  @ViewChildren('sectionCard') sectionCards!: QueryList<ElementRef>;

  skillCategories = [
    {
      title: 'Programming Language',
      skills: [
        { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript', level: 90 },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', level: 90 },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', level: 60 },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 55 },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031', level: 90 },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', level: 80 },
        { name: 'NgRx', icon: 'https://cdn.simpleicons.org/ngrx', level: 75 },
        { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5', level: 95 },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
        { name: 'Jest', icon: 'https://cdn.simpleicons.org/jest', level: 80 },
        { name: 'Jasmine', icon: 'https://cdn.simpleicons.org/jasmine', level: 80 },
        { name: 'Karma', icon: 'logos/Karma.png', level: 80 },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', level: 80 },
        { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot', level: 75 },
        { name: 'Express', icon: 'https://cdn.simpleicons.org/express', level: 80 },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb', level: 80 },
        { name: 'MySql', icon: 'https://cdn.simpleicons.org/mysql', level: 50 }
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', level: 90 },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', level: 85 },
        { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira', level: 85 },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', level: 75 },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95 }
      ]
    }
  ];

  ngAfterViewInit() {

    /* Scroll Reveal Animation */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.2 });

    this.sectionCards.forEach(card =>
      observer.observe(card.nativeElement)
    );

    /* 3D Tilt Effect */
    this.tiltCards.forEach(card => {
      const el = card.nativeElement;

      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 25;
        const rotateY = (x - centerX) / 25;

        el.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform =
          'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    });

  }
}
