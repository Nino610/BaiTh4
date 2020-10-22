import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { Page404Component } from './layouts/page404/page404.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './product/detail/detail.component';
import { ListComponent } from './product/list/list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginRegisterComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: 'cart-detail', component: CartDetailComponent },
  { path: 'checkout', component : CheckoutComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
