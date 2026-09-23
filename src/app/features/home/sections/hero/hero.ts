import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { BrandMark } from '../../../../shared/ui/brand-mark/brand-mark';
import { Button } from '../../../../shared/ui/button/button';
import { Constellation } from '../../../../shared/directives/constellation';

@Component({
  selector: 'app-hero',
  imports: [BrandMark, Button, Constellation],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly content = inject(SiteContentService);
}
