import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clients {}
