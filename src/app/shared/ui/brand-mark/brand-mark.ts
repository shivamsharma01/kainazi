import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SiteContentService } from '../../../core/services/site-content';

@Component({
  selector: 'app-brand-mark',
  templateUrl: './brand-mark.html',
  styleUrl: './brand-mark.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.compact]': 'variant() === "compact"',
    '[class.hero]': 'variant() === "hero"',
  },
})
export class BrandMark {
  private readonly content = inject(SiteContentService);

  readonly variant = input<'compact' | 'hero'>('compact');
  readonly src = this.content.brandImage;
  readonly alt = this.content.companyName;
}
