import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'pf-education',
  imports: [
    NgClass
  ],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements AfterViewInit {

  @ViewChildren('card') cards!: QueryList<ElementRef>;


  educationList = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Poornima Group of Institutions',
      board: 'Rajasthan Technical University',
      period: '2014 – 2018',
      description: 'Specialized in Computer Science and Engineering. Focused on software development, data structures, and system design.',
      logo: 'logos/RTU.jpg',
    },
    {
      degree: 'Higher Secondary (Class 12)',
      institution: 'Tantia High School',
      board: 'WBCHSE',
      period: '2012 – 2014',
      description: 'Completed with focus on Physics, Chemistry, and Mathematics.',
      logo: 'logos/WBBSE.png',
    },
    {
      degree: 'Secondary School (Class 10)',
      institution: 'Tantia High School',
      board: 'WBBSE',
      period: '2012',
      description: 'Completed foundational academic education with strong academic performance.',
      logo: 'logos/WBBSE.png',
    }
  ];

  public ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.2 });

    this.cards.forEach(card => {
      observer.observe(card.nativeElement);

      // Check if card is already visible on initial load
      const rect = card.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.nativeElement.classList.add('animate-visible');
      }
    });
  }


}
