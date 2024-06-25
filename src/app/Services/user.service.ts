import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userBean } from '../Beans/userBean';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userAuthObject:any=null;
  lienAchat:any=null;

  constructor(private http: HttpClient) {}

  addUser(userInfos: any) {
    return this.http.post<string>(
      'http://localhost:8080/Petshop/api/user/sign-up-user',
      userInfos
    );
  }

  login(user:any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/Petshop/api/user/login-user',user);
  }

  countUsers(): Observable<any>{
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/user/get-count-users'
    );
  }

  update(userId:any,userInfo:any): Observable<any>{
    return this.http.put<any>('http://localhost:8080/Petshop/api/user/update-user/'+userId,userInfo);
  }
}
