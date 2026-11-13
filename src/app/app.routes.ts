import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Kainazi Technology Solutions',
  },
  {
    path: 'work',
    loadComponent: () => import('./features/work/work-index').then((m) => m.WorkIndex),
    title: 'Work | Kainazi',
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./features/work/work-detail').then((m) => m.WorkDetail),
    title: 'Work | Kainazi',
  },
  {
    path: 'architecture',
    loadComponent: () =>
      import('./features/home/sections/architecture/architecture').then((m) => m.Architecture),
    title: 'Architecture | Kainazi',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./features/legal/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: 'Privacy Policy | Kainazi Server Backup',
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/legal/terms/terms').then((m) => m.Terms),
    title: 'Terms of Service | Kainazi Server Backup',
  },
  { path: '**', redirectTo: '' },
];
