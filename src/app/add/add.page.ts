import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Style } from '@capacitor/status-bar';
import { Styles } from '../style.model';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

identifiant!: number;
nom!: string;
marques!: string;
prix!: number;
taille!: number;
lien!: string;
article!: Styles;



  constructor( private route: ActivatedRoute, private styleservice: StyleService)
{ }

    ngOnInit(): void {
    }

    onSubmit(){
      const article =
      {
        id: this.identifiant = Date.now(),
        nom: this.nom,
        marques: this.marques,
        prix: this.prix,
        taille: this.taille,
        lien: this.lien,
        // complement:
  };
  console.log(article);
   //this.article=new Styles (this.identifiant,this.nom,this.marques,this.prix,this.taille,this.lien);
   this.styleservice.addProduit(article);
   }

}
