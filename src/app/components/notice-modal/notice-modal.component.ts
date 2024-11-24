import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice-modal',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './notice-modal.component.html',
})
export class NoticeModalComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  confirm() {
    this.confirmDelete.emit();
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
