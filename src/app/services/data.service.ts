import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Ipelis } from '../interfaces/interpeli.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string= '';
  private apiKey: string = 'ce438516';
  constructor( private http: HttpClient ) { }


  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getInfo()
  {
      return this.http.get('/assets/data/base.json');
  }

  buscarMovie(title: string, type: string)
  {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`;
    
    return this.http.get<Ipelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string)
  {
    return this.http.get<Ipelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
