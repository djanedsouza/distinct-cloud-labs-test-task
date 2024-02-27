import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster-section',
  templateUrl: './booster-section.component.html',
  styleUrls: ['./booster-section.component.scss'],
})
export class BoosterSectionComponent implements OnInit {
  totalBondPoints: number = 0;
  activityRate: number = 0;
  yourNetwork: number = 0;
  constructor() {}

  ngOnInit() {
    this.totalBondPoints = 24.29;
    this.activityRate = 0.75;
    this.yourNetwork = 10;
  }
}
