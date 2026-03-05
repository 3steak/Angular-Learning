import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header-composant',
  templateUrl: './header-composant.component.html',
  styleUrls: ['./header-composant.component.css']
})
export class HeaderComposantComponent {
  public nomUtilisateur = "";
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.nomUtilisateur = this.userService.getUsername();
  }
}

