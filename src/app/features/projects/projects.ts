import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'pf-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
  @ViewChildren('tiltCard') tiltCards!: QueryList<ElementRef>;

  projects = {
    personal: [
      {
        title: 'Portfolio Application',
        description:
          'AS Portfolio is a responsive web application designed to showcase my projects, technical skills, and professional experience. The platform highlights full-stack development work with detailed project descriptions, live demos, and source code links. It features a modern UI, optimized performance, and clean component-based architecture. The website is fully responsive, ensuring seamless usability across desktop and mobile devices, and is deployed using a production-ready setup.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800',
        tech: ['Angular', 'Tailwind', 'TypeScript']
      },
      {
        title: 'AS Eats (Swiggy Clone)',
        description:
          'AS Eats (Swiggy Clone) is a full-stack food delivery application that replicates core functionalities of modern food ordering platforms. The application supports secure user authentication, restaurant and menu browsing, cart management, order placement, and real-time order status updates. The platform is built with a scalable backend architecture, optimized database queries for menu and restaurant filtering, and a fully responsive UI for seamless usage across mobile and desktop devices.',
        image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800',
        tech: ['React', 'Redux', 'Tailwind', 'Swiggy API', 'Node.js', 'ExpressJS', 'MongoDB',]
      },
      {
        title: 'Dev Tinder',
        description:
          'DevTinder is a full-stack matchmaking platform designed specifically for developers to connect based on skills, interests, and collaboration goals. The application replicates core Tinder-style features including swipe-based matching, real-time mutual connections, profile discovery, and chat functionality. It includes secure JWT-based authentication, protected routes, and role-based access control. Users can create detailed developer profiles showcasing tech stacks, experience, and project interests. The platform supports real-time updates for matches and messaging, along with a responsive UI optimized for mobile and desktop devices.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
        tech: ['React', 'Node.js', 'ExpressJS', 'MongoDB', 'JWT', 'bcrypt', 'jest']
      },
      {
        title: 'Expense Tracker',
        description:
          'Expense Tracker App is a full-stack personal finance management application that enables users to securely manage their income and expenses using JWT-based authentication. Users can categorize transactions, set monthly budgets, and monitor spending patterns in real time. The application provides interactive bar and pie charts to visualize financial trends and category-wise breakdowns. It also includes CSV export functionality for downloading transaction history and a fully responsive UI optimized for both desktop and mobile devices.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
        tech: ['Angular', 'Node.js', 'ExpressJS', 'MongoDB', 'JWT', 'bcrypt', 'jest']
      }
    ],

    enterprise: {
      totalProjects: 20,
      description:
        'Owned and enhanced critical enterprise modules within a large, mission-critical web application.\n' +
        'Designed scalable frontend architecture using Angular and structured state management for complex data-driven workflows.\n' +
        'Improved performance, stability, and maintainability through optimized API integration and engineering best practices.',
      technologies: [
        'Angular',
        'ReactJS',
        'TypeScript',
        'Javascript',
        'NgRx',
        'Redux',
        'Jest',
        'Jasmine',
        'Karma',
        'Node.js',
        'MongoDB',
        'Spring Boot',
        'MySQL',
        'Jira',
        'Git'
      ]
    }
  };

  ngAfterViewInit() {

    this.tiltCards.changes.subscribe(() => {
      this.attachTilt();
    });

    this.attachTilt();
  }

  private attachTilt() {

    this.tiltCards.forEach(card => {

      const el = card.nativeElement;

      el.onmousemove = (e: MouseEvent) => {

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 30;
        const rotateY = (x - centerX) / 30;

        el.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      el.onmouseleave = () => {
        el.style.transform =
          'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      };

    });

  }
}
