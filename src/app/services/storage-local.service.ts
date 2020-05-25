import { Injectable } from '@angular/core';
import { Ipelis } from '../interfaces/interpeli.interface';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {

  movies: Ipelis[] = [];
  peli: [];
  datos: any[] = [];

  constructor(private storage: Storage) { 
    this.leerStorage();
  }

  guardarMovies(movie: Ipelis){

    const encontro = this.movies.find(n => n.Title === movie.Title);

    if(!encontro){
      this.movies.unshift(movie);
      this.storage.set('favs',this.movies);
    }
  }

  async leerStorage(){
    const f = await this.storage.get('favs');
    if(f){
      this.movies = f;
    }
  }

  deleteMovies(movie: Ipelis){
    this.movies = this.movies.filter(n => n.Title !== movie.Title);
    this.storage.set('favs',this.movies);
  }

  
  mostrarMovies(){
    this.storage.get('favs').then((resp) => {
      this.datos = [];
      resp.forEach((x) => {
          this.datos.push(x);
      } );
     /* if(resp !== null){
       this.device = Object.keys(resp);
       console.log(this.device);
       }*/
       return resp;
    });
  }
}
