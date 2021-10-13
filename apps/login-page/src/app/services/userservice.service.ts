import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  api = "http://localhost:3000/userlogin/users"
  constructor(private http: HttpClient) { }

  // for new user 
  postuser(data:{name:string, email: string, passwordHash:string,phone: number,isAdmin:boolean}): Observable<any>{
    return this.http.post<any>(`${this.api}`,data);
  }

  checkisuser(data:{email:string, passwordHash: string}): Observable<any>{
    return this.http.post<any>(`${this.api}/login`,data);
  }

  
}

