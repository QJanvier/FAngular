import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute) {
    // You can access the id param with: this.route.snapshot.paramMap.get('id')
  }
}
