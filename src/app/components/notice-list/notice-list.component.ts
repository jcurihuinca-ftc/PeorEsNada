import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../models/notice.model';
import { ModalController, IonicModule } from '@ionic/angular';
import { NoticeModalComponent } from '../notice-modal/notice-modal.component';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, DatePipe],
})
export class NoticeListComponent implements OnInit {
  notices: Notice[] = [];

  constructor(private noticeService: NoticeService, private modalController: ModalController, private router: Router) {}

  navigateToCreateNotice() {
    this.router.navigate(['/create']);
  }

  async ngOnInit() {
    this.notices = await this.noticeService.getNotices();
  }

  async confirmDelete(id: number) {
    const modal = await this.modalController.create({
      component: NoticeModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data === 'confirm') {
        this.noticeService.deleteNotice(id);
        this.notices = this.notices.filter(notice => notice.id !== id);
      }
    });

    await modal.present();
  }
}
