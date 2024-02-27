import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;

  constructor(private router: Router) {}

  ngOnInit() {}
  openTab(tab: string) {
    this.router.navigateByUrl('home/' + tab, { replaceUrl: true });
  }
}
