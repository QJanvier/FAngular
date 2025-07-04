import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation = this.housingService.
    getHousingLocationById(housingLocationId);
  }
}
