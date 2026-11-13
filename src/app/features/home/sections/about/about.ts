import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly content = inject(SiteContentService);
}
