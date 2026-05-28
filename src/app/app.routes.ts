import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Formulario } from './pages/formulario/formulario';
import { Login } from './pages/login/login';

export const routes: Routes = [

  {
    path: 'products',
    component: Products
  },
  {
    path: 'login',
    component:Login
  },
  {
    path: 'formulario',
    component:Formulario
  },
  // hoka
  {
    path: 'home',
    component:Home
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];
