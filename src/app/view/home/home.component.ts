import { Component } from '@angular/core';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { LibHeaderComponent } from '../../core/shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LibHeaderComponent, BannerHeroComponent, BenefitsComponent, PricingComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
