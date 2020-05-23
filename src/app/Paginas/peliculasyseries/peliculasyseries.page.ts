import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-peliculasyseries',
  templateUrl: './peliculasyseries.page.html',
  styleUrls: ['./peliculasyseries.page.scss'],
})
export class PeliculasyseriesPage implements OnInit {

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  peliSeries: Observable<any>;
  classification = '';

  constructor(  private dataService: DataService) { }

  ngOnInit() {
    this.segment.value='todos';
    this.peliSeries =  this.dataService.getInfo();
  }

  segmentChanged( event )
  {
    const valorSegmento = event.detail.value;

    if(valorSegmento === 'todos')
    {
      this.classification = '';
      return;
    }

    this.classification = valorSegmento;

    console.log(valorSegmento);
  }

}
