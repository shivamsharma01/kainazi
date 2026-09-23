import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { Card } from '../../../../shared/ui/card/card';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-engagement',
  imports: [SectionHeader, Card],
  templateUrl: './engagement.html',
  styleUrl: './engagement.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Engagement {
  readonly content = inject(SiteContentService);
}
