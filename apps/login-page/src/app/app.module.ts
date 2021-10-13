import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
const routes: Routes = [

  {
    path: '',
    component:LoginComponentComponent
  },
  {
    path: 'newuser',
    component:NewuserComponent
  },
  {
    path:'dashboard',
    canActivate:[AuthServiceService],
    component:DashboardComponent,
  }
]
@NgModule({
  declarations: [AppComponent, LoginComponentComponent, NewuserComponent, DashboardComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
