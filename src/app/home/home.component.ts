import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService: UserService) {
  }
  login() {
    this.userService.login("Jean");

  }
}
