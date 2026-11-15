import { Routes } from '@angular/router';
import { Pag1 } from './private/pag1/pag1';
import { Pag2 } from './private/pag2/pag2';
import { Pag3 } from './private/pag3/pag3';



export const routes: Routes = [
{ path: 'pag1', component: Pag1 },
  { path: 'pag2', component: Pag2 },
  { path: 'pag3', component: Pag3 },
  { path: '', redirectTo: '/pag1', pathMatch: 'full' }
];


 
 