import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.class';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = new User();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister() {
    const user = await this.dataService.onRegister(this.user);
    if (user) {
      console.log('Ha creado su usuario satisfactoriamente');
      this.router.navigateByUrl('/');
    }
    
  }
}
