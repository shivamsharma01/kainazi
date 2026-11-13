import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  readonly content = inject(SiteContentService);
}
