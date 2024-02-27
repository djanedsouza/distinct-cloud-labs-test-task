import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Navigation, Router, RouterOutlet } from '@angular/router';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {}

//   async openTab(tab: string, evt: MouseEvent) {
//     const tabSelected = this.tabs.getSelected();
//     evt.stopImmediatePropagation();
//     evt.preventDefault();
//     return tabSelected !== tab
//       ? await this.router.navigateByUrl(this.tabs.outlet.tabsPrefix + '/' + tab, {replaceUrl: true})
//       : this.tabs.select(tab);
// }

openTab(tab: string) {
  this.router.navigateByUrl('home/' + tab, {replaceUrl: true})
}

}
