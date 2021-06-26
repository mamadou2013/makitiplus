import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offers = [
    {
      name:"Electroninque informatique",
      icon:"../../assets/icons/electronic.png",
      background:"#c9f6ba"
    },
    {
      name:"Transport",
      icon:"../../assets/icons/transport.png",
      background:"#b6eff2"
    },
    {
      name:"Immobiliers",
      icon:"../../assets/icons/immobilier.svg",
      background:"#d3ebcf"
    },
    {
      name:"Vêtements",
      icon:"../../assets/icons/vetement.svg",
      background:"#b7e6f1"
    },
    {
      name:"Aliments",
      icon:"../../assets/icons/aliment.svg",
      background:"#fdddca"
    },
    {
      name:"Electroménagers",
      icon:"../../assets/icons/electromenager.svg",
      background:"#c6eee7"
    },
    {
      name:"Elmplois",
      icon:"../../assets/icons/emplois.svg",
      background:"#cdd1eb"
    },
    {
      name:"Services",
      icon:"../../assets/icons/service.svg",
      background:"#f6f0bc"
    },
    {
      name:"Divers",
      icon:"../../assets/icons/divers.svg",
      background:"#eee9d8"
    },
  ];

  constructor() { }

  //geter of offers
  getOffers(){
    return this.offers;
  }

}
