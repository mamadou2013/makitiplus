import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product1.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product2.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product3.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product4.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product4.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product3.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product2.png'
    },
    {
      name:'Nike for man',
      price:800000,
      description:'Chaussure Nike à vendre',
      picture:'../../assets/images/product1.png'
    },
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }

}
