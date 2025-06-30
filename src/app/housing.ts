import { Injectable } from '@angular/core';
import { HousingLocation} from './housing-location/housing-location';

@Injectable({
  providedIn: 'root'
})
export class Housing {
  protected housingLocationList: HousingLocation[] = [];
  constructor() { }
}
