import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FotoModul } from '../modul/foto/foto.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor( private http : HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/photos" ; 
  getService(): Observable<FotoModul[]>{
    
    return this.http.get<FotoModul[]>(this.url)
 }




}
