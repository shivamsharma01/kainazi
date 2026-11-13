import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content';
import { Button } from '../../../../shared/ui/button/button';
import { Constellation } from '../../../../shared/directives/constellation';

@Component({
  selector: 'app-hero',
  imports: [Button, Constellation, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly content = inject(SiteContentService);
}
