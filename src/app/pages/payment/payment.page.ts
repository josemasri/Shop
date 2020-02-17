import { Component, OnInit } from '@angular/core';
import { MapboxServiceService, Feature } from '../../services/mapbox-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  form = {
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    direccion: ''
  };

  addresses: string[] = [];
  selectedAddress = null;

  constructor(
    private mapboxService: MapboxServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService
        .search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.addresses = features.map(feat => feat.place_name);
        });
      } else {
        this.addresses = [];
      }
  }

  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
