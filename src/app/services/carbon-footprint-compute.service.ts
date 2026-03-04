import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private voyages = [
    { distanceKm: 100, consommationPour100Km: 5.5, quantiteCO2: 0 },
    { distanceKm: 200, consommationPour100Km: 6.5, quantiteCO2: 0 },
    { distanceKm: 300, consommationPour100Km: 7.5, quantiteCO2: 0 },
    { distanceKm: 400, consommationPour100Km: 8.5, quantiteCO2: 0 },
    { distanceKm: 500, consommationPour100Km: 9.5, quantiteCO2: 0 },
  ];

  getVoyages() {
    return this.voyages;
  }

  addVoyage(voyage: any) {
    voyage.quantiteCO2 =
      (voyage.distanceKm * voyage.consommationPour100Km) / 100 * 2.3;

    this.voyages.push(voyage);
  }

  getResumeVoyages() {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteCO2Totale = 0;

    this.voyages.forEach(voyage => {
      distanceKm += voyage.distanceKm;
      consommationPour100Km += voyage.consommationPour100Km;
      quantiteCO2Totale += voyage.quantiteCO2;
    });

    return { distanceKm, consommationPour100Km, quantiteCO2Totale };
  }
}