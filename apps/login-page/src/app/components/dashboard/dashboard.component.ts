import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  token: any;
  
  ngOnInit(): void {
    
    this._getToken();
  }

  private _getToken() {
    this.token = localStorage.getItem('token');
  }

}
