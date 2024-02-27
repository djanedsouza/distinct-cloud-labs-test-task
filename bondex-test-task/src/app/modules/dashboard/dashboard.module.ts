import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderComponent } from './header/header.component';
import { BoosterSectionComponent } from './booster-section/booster-section.component';
import { YourDashboardComponent } from './your-dashboard/your-dashboard.component';
import { MoreItemsComponent } from './more-items/more-items.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InviteFriendsComponent } from './invite-friends/invite-friends.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardPage,
    HeaderComponent,
    BoosterSectionComponent,
    YourDashboardComponent,
    MoreItemsComponent,
    InviteFriendsComponent,
  ],
})
export class DashboardPageModule {}
