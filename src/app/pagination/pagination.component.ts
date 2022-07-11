import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent{
  @Input() disabledBack: boolean;
  @Input() disabledNext: boolean;
  @Output() onBack: EventEmitter<void>;
  @Output() onNext: EventEmitter<void>;
  constructor() {
    this.onBack = new EventEmitter();
    this.onNext = new EventEmitter();
    this.disabledNext = false;
    this.disabledBack = false;
  }

  back() {
    this.onBack.emit();
  }
  next() {
    this.onNext.emit();
  }
}
