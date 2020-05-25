import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { StorageLocalService } from 'src/app/services/storage-local.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  datos: any[] = [];

  constructor(private storage: Storage, private sL: StorageLocalService) { 
    this.mostrarMovies();
  }

  ngOnInit() {
  }

  mostrarMovies(){
    this.storage.get('favs').then((resp) => {
      this.datos = [];
      resp.forEach((x) => {
          this.datos.push(x);
      } );
       return resp;
    });
  }

  delete(movie){
    this.lista.closeSlidingItems();
    this.sL.deleteMovies(movie);
  }

}
