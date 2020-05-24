import { Component, OnInit } from '@angular/core';
import { Ipelis } from '../../../interfaces/interpeli.interface';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  resultBus: Observable<Ipelis>;
  term: string = '';
  type: string = '';
  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }


  serchChanged(ev):void{
    this.resultBus = this.dataService.buscarMovie(this.term, this.type);
  }

}
