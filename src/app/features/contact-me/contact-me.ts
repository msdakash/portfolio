import {Component, computed, HostListener, inject, signal, ViewChild} from '@angular/core';
import emailjs from '@emailjs/browser';
import {environment} from '../../../environments/environment';
import {Toast} from '../../shared/components/toast/toast';
import {ToastService} from '../../shared/components/toast/toast.service';

@Component({
  selector: 'pf-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {
  // signals for form fields
  public name = signal('');
  public email = signal('');
  public message = signal('');
  public errorMessage = signal('');
  public isError = signal(false);
  public rows = signal(this.getRows());

  private readonly toastService = inject<ToastService>(ToastService)

  // validation signal
  public isFormValid = computed(() => {
    return (
      this.name().trim().length > 2 &&
      this.email().includes('@') &&
      this.message().trim().length > 5
    );
  });

  public async submitForm() {
    this.isError.set(false);

    if (!this.isFormValid()) {
      alert('Form is invalid');
      return;
    }

    const formData = {
      name: this.name(),
      email: this.email(),
      message: this.message()
    };

    try {
      await emailjs.send(
        environment.emailJS.serviceId,
        environment.emailJS.templateId,
        formData,
        environment.emailJS.publicKey
      )
      this.toastService.success('Email sent successfully');
      this.resetForm()
    } catch (error) {
      this.toastService.error("An error occurred while sending your message. Please try again later.")
    }

  }

  public resetForm(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
  }


  public getRows(): number {
    const width = window.innerWidth;
    if (width < 640) return 8;      // mobile
    if (width < 1024) return 10;     // tablet
    if (width < 1280) return 12;     // tablet
    return 18;                       // desktop
  }

  @HostListener('window:resize') onResize() {
    this.rows.set(this.getRows());
  }
}
