import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Ipelis } from '../interfaces/interpeli.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string= '';
  private apiKey: string = 'ce438516';
  public isLogged: any = false;

  constructor(  private http: HttpClient,
                public afAuth: AngularFireAuth ) { 
                  afAuth.authState.subscribe(user => (this.isLogged = user));
                }


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

  getDetails(id: string) {
    return this.http.get<Ipelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

   //LOGIN
   async onLogin (user: User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error){
      console.log('Error en Login', error);
    }
  }

  //REGISTER
  async onRegister (user: User){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error){
      console.log('Error en Register', error);
    }
  }

}
