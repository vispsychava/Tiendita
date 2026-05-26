import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

export const routes: Routes = [

  {
    path: 'products',
    component: Products
  },
  {
    path: 'home',
    component:Home
  },
];
