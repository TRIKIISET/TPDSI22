import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsi-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {

  aliment={
    nom:"yaourt",
    prix:0.6,
    image:"assets/Alimentation/yaourt.jpg",
    frais:false
  }
prix:any ="15";

  onAfficher(){
    alert(this.aliment.nom+ " "+ this.aliment.prix+ " "+ this.aliment.frais);
  }

  onAppuyer(event:KeyboardEvent){
    console.log(event.target + " "+(<HTMLInputElement> event.target).value);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
