import { Component, OnInit, ViewChild } from '@angular/core';
import { Ipelis } from '../../interfaces/interpeli.interface';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageLocalService } from 'src/app/services/storage-local.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  resultBus: Observable<Ipelis>;
  term: string = '';
  type: string = '';
  id: string ='';
  cat=['movie','series','episode'];
  constructor( private dataService: DataService,  public sL: StorageLocalService, private sS: SocialSharing ) { }

  ngOnInit() {
  }


  serchChanged(ev):void{
    this.resultBus = this.dataService.buscarMovie(this.term, this.type);
  }

  obtenerPelis(){
    this.dataService.getDetails(this.id).subscribe( data => {
      console.log(data);
    });
  }

  favorite(movie){
    console.log('favorite');
    this.lista.closeSlidingItems();
    this.sL.guardarMovies(movie);
  }

  share(movie){
    console.log('share');
    this.lista.closeSlidingItems();
    this.sS.share(movie);
  }
}
