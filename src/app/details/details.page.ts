import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumericValueAccessor } from '@ionic/angular';
import { Styles } from '../style.model';
import { StyleService } from '../style.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {


@Input()
id!: number;
style!: Styles | undefined;

  constructor(  private route: ActivatedRoute, private styleservice: StyleService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      if (param.get('id')){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.id =+param.get('id')!;
        this.style = this.styleservice.getStyleById(this.id);
       }
    });
}

deleteArticle(book: Styles): void{
 // console.log(book);
  this.styleservice.addSup(book);
}
}
