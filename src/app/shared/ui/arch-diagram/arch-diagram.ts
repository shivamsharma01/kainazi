import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArchitectureNode } from '../../../core/models/site.models';

@Component({
  selector: 'app-arch-diagram',
  templateUrl: './arch-diagram.html',
  styleUrl: './arch-diagram.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchDiagram {
  readonly layers = input.required<readonly ArchitectureNode[][]>();
}
