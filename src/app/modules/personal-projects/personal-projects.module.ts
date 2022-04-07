import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVModule } from '@modules/personal-projects/cv/cv.module';
import { PortfolioModule } from '@modules/personal-projects/portfolio/portfolio.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CVModule, PortfolioModule],
  exports: [CVModule, PortfolioModule]
})
export class PersonalProjectsModule {}
