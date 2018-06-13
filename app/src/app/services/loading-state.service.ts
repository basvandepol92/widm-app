import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoadingStateService {

  private isLoading;
  @Output() change: EventEmitter<any> = new EventEmitter();

  loading(isLoading) {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
      this.change.emit(this.isLoading);
    }
  }
}


