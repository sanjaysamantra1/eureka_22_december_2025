import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Home } from './components/home/home';
import { Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { Userdetails } from './components/userdetails/userdetails';
import { Productdetails } from './components/productdetails/productdetails';
import { Permanentjobs } from './components/permanentjobs/permanentjobs';
import { Contractjobs } from './components/contractjobs/contractjobs';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: 'permanent', component: Permanentjobs },
      { path: 'contract', component: Contractjobs },
    ]
  },
  { path: 'contactus', component: Contactus },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: Userdetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: Productdetails },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];
