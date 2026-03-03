import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {
  distanceKm: number = 150;
  consommationPour100Km: number = 5;
  ajouter100Km() {
    this.distanceKm += 100;
  }
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];
  genererVoyage() {
    const distance = Math.floor(Math.random() * 1000) + 1;
    const consommation = Math.floor(Math.random() * 10) + 1;
    this.voyages.push({
      distanceKm: distance, consommationPour100Km:
        consommation
    });
  }
}