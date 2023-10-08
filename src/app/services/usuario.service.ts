import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url:string= 'https://gorest.co.in/public/v2/users'
  // https://gorest.co.in/public/v2/users?access-token=xxx
  token:string= '327af3d65f6f94eb88821e9fff00ebb8dafdaa7e232a062eb32cb6fb1551293f'
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.url+'?access-token='+this.token);
  }

  getUsuario(id:number): Observable<any>{
    return this.http.get(this.url+'/'+ id+'?access-token='+this.token);
  }
}
