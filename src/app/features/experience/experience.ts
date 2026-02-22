import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'pf-experience',
  imports: [
    NgClass
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  public experiences = [
    {
      id: 0,
      role: 'R&D Engineering, Sr Engineer',
      company: 'Synopsys Software Pvt. Ltd.',
      period: '2026 – Present',
      logoLight: 'logos/SNPS-white.png',
      logoDark: 'logos/SNPS.Dark.png',
      description: [
        'Played a key role in the continued evolution of the product during and after the Ansys–Synopsys merger, ensuring architectural stability and feature continuity.',
        'Led end-to-end development of major features, from design discussions to production delivery within the Granta MI platform.',
        'Took ownership of critical frontend modules, driving architectural improvements and long-term maintainability.',
        'Enhanced scalability of complex Angular applications through advanced state management using NgRx.',
        'Optimized frontend-backend integration to improve performance across large enterprise datasets.',
        'Reviewed pull requests, and guided frontend best practices across the team.',
        'Actively contributed to Agile delivery cycles including sprint planning, technical estimations, backlog grooming, and stakeholder demos.'
      ]
    }, {
      id: 1,
      role: 'R & D Engineer II',
      company: 'Ansys Software Pvt. Ltd.',
      period: '2021 – 2025',
      logoLight: 'logos/ansyslogo.png',
      logoDark: 'logos/ANSS.Dark.png',
      description: [
        'Played a key role in modernizing the Ansys Granta MI platform by migrating legacy desktop modules into scalable Angular-based SPAs.',
        'Engineered enterprise-grade modules including Material Calibration, Admin, Data Flow, and Version Control with responsive and maintainable UI architecture.',
        'Optimized frontend-backend integration through efficient API consumption and performance-focused UI rendering.',
        'Architected state management to handle complex workflows and large datasets.',
        'Actively contributed to Agile sprint cycles, participating in planning, standups, and bi-weekly demos.',
        'Strengthened code quality through structured unit testing using Karma and Jasmine.',
        'Delivered internal technical presentations to promote adoption of new tools and architectural improvements.',
      ]
    },
    {
      id: 2,
      role: 'Senior Systems Engineer',
      company: 'Infosys Ltd.',
      period: '2020 – 2021',
      logoLight: 'logos/INFY.png',
      logoDark: 'logos/INFY.Dark.png',
      description: [
        'Developed and maintained enterprise-grade frontend applications using Angular and React across multiple client engagements.',
        'Engineered responsive UI systems from design wireframes, ensuring performance, accessibility, and cross-browser compatibility',
        'Architected and implemented RESTful APIs using Spring Boot, enabling efficient frontend-backend integration.',
        'Delivered a Progressive Web Application (PWA) with offline support and installable capabilities, enhancing user accessibility.',
        'Applied NgRx for scalable state management in complex data-driven applications.',
        'Established unit testing practices using Jest, Karma, and Jasmine to improve code reliability.',
        'Contributed within Agile teams following sprint planning, daily standups, and iterative demos.',
      ]
    },
    {
      id: 3,
      role: 'Systems Engineer',
      company: 'Infosys Ltd.',
      period: '2018 – 2020',
      logoLight: 'logos/INFY.png',
      logoDark: 'logos/INFY.Dark.png',
      description: [
        'Worked on different projects , for different clients and different frontend frameworks like Angular and React',
        'Designing the exact responsive UI in Angular and React from the wireframe created.',
        'Designing the exact responsive UI in Angular and React from the wireframe created.',
        'Write unit test cases for the component and service in Jest, Karma and Jasmine depending.',
      ]
    }
  ];

  public ngAfterViewInit() {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });

    }, {threshold: 0.2});

    this.cards.forEach(card => {
      observer.observe(card.nativeElement)

      const rect = card.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.nativeElement.classList.add('animate-visible');
      }
    });

  }
}
