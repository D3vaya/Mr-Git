import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { UsersService } from '../../../core/services/users.service';
import { Administrator } from '../../../core/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: Administrator;
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService
      .login()
      .then((googleCredential) => {
        const user = new Administrator(
          googleCredential.user.uid,
          googleCredential.user.displayName,
          googleCredential.user.email
        );

        console.log(user);
        this.userService
          .add(user)
          .then(() => {
            console.log('usuario creado');
            this.router.navigate(['cms']);
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(googleCredential);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
