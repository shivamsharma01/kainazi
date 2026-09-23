import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: '<ng-content />',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tag {}
