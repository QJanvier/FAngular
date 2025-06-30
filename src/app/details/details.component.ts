import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  housingLocationId=0;

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
