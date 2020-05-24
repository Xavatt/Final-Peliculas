import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  pelis: Observable<any>;
  desc='';

  constructor(private peliService: DataService) { }

  ngOnInit() {

    this.pelis = this.peliService.getInfo();
  }

}
