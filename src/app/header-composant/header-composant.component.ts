import { Component } from '@angular/core';

@Component({
  selector: 'app-header-composant',
  templateUrl: './header-composant.component.html',
  styleUrls: ['./header-composant.component.css']
})
export class HeaderComposantComponent {
  nomUtilisateur: string = 'Jean';
}

