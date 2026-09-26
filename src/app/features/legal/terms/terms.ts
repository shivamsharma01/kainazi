import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../core/services/site-content';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  templateUrl: './terms.html',
  styleUrl: '../legal-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Terms {
  readonly content = inject(SiteContentService);
  readonly effectiveDate = '26 September 2026';
}
