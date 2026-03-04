import { Component } from '@angular/core';
import { CarbonFootprintComputeService } from '../services/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent {
  voyages: any[] = [];
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  quantiteCO2Totale: number = 0;

  constructor(
    private carbonFootprintComputeService: CarbonFootprintComputeService
  ) {
    this.voyages = this.carbonFootprintComputeService.getVoyages();
    this.calculerTotalEtMoyenne();
  }
  genererVoyage() {
    const distance = Math.floor(Math.random() * 1000) + 1;
    const consommation = Math.floor(Math.random() * 10) + 1;

    this.carbonFootprintComputeService.addVoyage({
      distanceKm: distance,
      consommationPour100Km: consommation
    });

    this.voyages = this.carbonFootprintComputeService.getVoyages();
    this.calculerTotalEtMoyenne();
  }

  calculerTotalEtMoyenne() {
    let resume = this.carbonFootprintComputeService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }
}