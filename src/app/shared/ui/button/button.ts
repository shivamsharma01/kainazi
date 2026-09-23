import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'a[appButton], button[appButton]',
  template: '<ng-content />',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn',
    '[class.btn-primary]': 'variant() === "primary"',
    '[class.btn-secondary]': 'variant() === "secondary"',
    '[class.btn-ghost]': 'variant() === "ghost"',
    '[class.btn-text]': 'variant() === "text"',
    '[class.btn-accent]': 'variant() === "accent"',
  },
})
export class Button {
  readonly variant = input<'primary' | 'secondary' | 'ghost' | 'text' | 'accent'>('primary');
}
