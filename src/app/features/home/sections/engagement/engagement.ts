import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.html',
  styleUrl: './engagement.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Engagement {
  readonly content = inject(SiteContentService);
}
