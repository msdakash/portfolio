import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {IToastService, ToastService} from './toast.service';
import {Subscription} from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

@Component({
  selector: 'pf-toast',
  imports: [
    NgClass
  ],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast implements OnInit, OnDestroy {

  public show = false;
  public message = '';
  public type: ToastType = 'info';
  private subscription!: Subscription;
  private timeoutId: any;
  private readonly toastService = inject<IToastService>(ToastService);
  private readonly cdr = inject(ChangeDetectorRef);

  public ngOnInit() {
    this.subscription = this.toastService.toastState$.subscribe((toast) => {
      this.message = toast.message;
      this.type = toast.type;
      this.show = true;
      this.cdr.detectChanges();

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.close();
        this.cdr.detectChanges();
      }, toast.duration || 3000);
    });
  }

  public close() {
    this.show = false;
    this.cdr.detectChanges();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    clearTimeout(this.timeoutId);
  }

}
