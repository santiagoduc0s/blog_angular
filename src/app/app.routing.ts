// IMPORTS NEEDED
import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// IMPORTS COMPONENTS
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

// DEFINE ROUTES
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent}
];

// EXPORT CONFIG
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
