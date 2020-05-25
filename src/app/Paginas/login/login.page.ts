import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  async onLogin() {
    const user = await this.dataService.onLogin(this.user);
    if (user) {
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/');
    }
  }
  
}
