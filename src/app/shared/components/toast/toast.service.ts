import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';


export interface IToastService {
  success(message: string): void;

  error(message: string): void;

  info(message: string): void;

  toastState$: Observable<ToastData>;
}

export type ToastType = 'success' | 'error' | 'info';

export interface ToastData {
  message: string;
  type: ToastType;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService implements IToastService {

  private toastSubject = new Subject<ToastData>();

  public toastState$ = this.toastSubject.asObservable();

  public success(message: string,) {
    this.toastSubject.next({message, type: "success", duration: 3000});
  }

  public error(message: string,) {
    this.toastSubject.next({message, type: "error", duration: 3000});
  }

  public info(message: string,) {
    this.toastSubject.next({message, type: "info", duration: 3000});
  }

}
