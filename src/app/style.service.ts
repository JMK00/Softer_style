import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Styles } from './style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {


  styles: Styles [] = [
    {
      id: 1,
      nom: 'Chemise',
      marques: 'Adidas',
      prix: 100,
      taille: 40,
      lien: 'assets/img/chemise.jpg',
      // complement:

    },

    {
      id: 2,
      nom: 'Pantalon',
      marques: 'Nike',
     prix: 150,
     taille:10,
      lien: 'assets/img/pantalon.jpg',
      // complement:

    },

    {
      id: 3,
      nom:'Chaussures',
      marques: 'Gucci',
      prix: 200,
      taille: 10,
      lien: 'assets/img/basket.jpg',
      // complement:

    },

    {
      id: 4,
      nom:'Robe',
      marques: 'Dior',
      prix: 250,
      taille: 35,
      lien: 'assets/img/robe.jpg',
      // complement:

    },
  ];



  constructor() { }
  getStyle(): Styles[]{
    return this.styles;
  }

  getStyleById(id: number): Styles |undefined{
    const styles=this.styles.find(value => value.id === id);
    return styles;
  }

  addProduit(book: Styles): void{
    //book.id = this.getId();
    this.styles.push(book);
   }

   addSup(book: Styles): void{
    //console.log(book);
    //book.id = this.getId();
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.styles=this.styles.filter(element => element.id!== book.id);
   }

   private getId(): number{
     let idMAx = 0;
     this.styles.forEach(book =>{
       if(book.id && book.id > idMAx){
         idMAx = book.id;
       }
     });
     return idMAx +1;
   }

}
