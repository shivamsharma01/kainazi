import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../core/services/site-content';

@Component({
  selector: 'app-work-index',
  imports: [RouterLink],
  templateUrl: './work-index.html',
  styleUrl: './work-index.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkIndex {
  readonly content = inject(SiteContentService);
}
