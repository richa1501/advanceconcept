import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Apis from 'src/app/shared/configs/Apis';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  userdata:any= null;
  constructor(private http : HttpClient) { 

    this.userdata = localStorage.getItem("userdata") || "{}";
    this.userdata= JSON.parse(this.userdata);
  }


  login(body:any){
    console.log("login from auth" )
   return this.http.post(Apis.auth.login, body).pipe(
    tap((response)=>{
      localStorage.setItem("userdata",JSON.stringify(response));
    })
   )
}
}
