import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  offers?:any;

  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
    console.log(this.offers[2]);
  }

  ngSetBackground(index:number){
    //console.log(this.offers[index].background);
    return this.offers[index].background;
  }


}
