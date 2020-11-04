import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  aliments= [
    {
        nom:"Lait",
        image:"assets/Alimentation/lait.jpg",
        prix:1.2,
        frais:true
    },
    {
        nom:"Pâtes",
        image:"assets/Alimentation/pate.jpg",
        prix:0.41,
        frais:false
    }
    ,
    {
        nom:"Tomate en conserve",
        image:"assets/Alimentation/tomate.jpg",
        prix:1.8,
        frais:false
    },
    {
        nom:"Huile",
        image:"assets/Alimentation/huile.jpg",
        prix:8.5,
        frais:false
    },
    {
        nom:"Riz",
        image:"assets/Alimentation/riz.jpg",
        prix:2.5,
        frais:false
    }
];

}
