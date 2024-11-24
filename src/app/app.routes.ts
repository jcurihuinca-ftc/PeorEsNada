import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/notice-list/notice-list.component').then((m) => m.NoticeListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./components/create-notice-form/create-notice-form.component').then((m) => m.CreateNoticeFormComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
