import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content';

@Component({
  selector: 'app-work',
  imports: [RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  readonly content = inject(SiteContentService);
}
