import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../core/services/site-content';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly content = inject(SiteContentService);
  readonly year = new Date().getFullYear();
}
