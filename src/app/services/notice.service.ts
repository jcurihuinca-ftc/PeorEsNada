import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Notice } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  private notices: Notice[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    this.loadNotices();
  }

  async loadNotices() {
    const storedNotices = await this.storage.get('notices');
    this.notices = storedNotices || [];
  }

  async getNotices(): Promise<Notice[]> {
    if (!this.notices.length) {
      await this.loadNotices();
    }
    return this.notices;
  }

  async addNotice(notice: Notice) {
    notice.date = new Date(notice.date);
    this.notices.push(notice);
    await this.storage.set('notices', this.notices);
  }

  async setNotices(notices: Notice[]) {
    this.notices = notices;
    await this.storage.set('notices', this.notices);
  }

  async deleteNotice(id: number) {
    this.notices = this.notices.filter((notice) => notice.id !== id);
    await this.storage.set('notices', this.notices);
  }

}
