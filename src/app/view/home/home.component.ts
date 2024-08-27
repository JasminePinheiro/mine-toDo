import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerHeroComponent, BenefitsComponent, PricingComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
