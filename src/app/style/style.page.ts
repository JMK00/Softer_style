import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Styles } from '../style.model';
import { StyleService } from '../style.service';


@Component({
  selector: 'app-style',
  templateUrl: './style.page.html',
  styleUrls: ['./style.page.scss'],
})
export class StylePage implements OnInit {

  styles: Styles[] = [];


  constructor(
    private styleService: StyleService,
    private navCtrl: NavController,
  ) {this.loadAll(); }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(){
    this.styles= this.styleService.getStyle();
    console.log(this.styles);
  }

  goToAdd(): void {
    this.navCtrl.navigateForward(`/add`);
  }
  goTo(id: number): void {
    this.navCtrl.navigateForward(`style/${id}`);
  }

}

