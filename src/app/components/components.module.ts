import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyPortfolioComponent } from './body-portfolio/body-portfolio.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  
@NgModule({
  declarations: [
    MenuComponent,
    SidebarComponent,
    BodyPortfolioComponent
  ],
  imports: [
  CommonModule,
  AngularTypewriterEffectModule,
  FontAwesomeModule
  ],
  exports:[
    MenuComponent,
    SidebarComponent,
    BodyPortfolioComponent
  ]
})
export class ComponentsModule { }
