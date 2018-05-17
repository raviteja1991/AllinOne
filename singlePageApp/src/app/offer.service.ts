import { Injectable } from '@angular/core';

@Injectable()
export class OfferService {
  offerday: boolean = true;
  offermessage: string;
  constructor() {
    this.offermessage = "summer offer 40% on all cloud courses";
  }
}
