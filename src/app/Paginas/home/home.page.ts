import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menu: MenuController,
              private dataS: DataService,
              private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.componentes = this.dataS.getMenuOpts();
  }

  onLogout(){
    console.log('Sesión cerrada');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
 
  }



}

