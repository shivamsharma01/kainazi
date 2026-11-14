import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Clients } from './sections/clients/clients';
import { Contact } from './sections/contact/contact';
import { Engagement } from './sections/engagement/engagement';
import { Hero } from './sections/hero/hero';
import { Services } from './sections/services/services';
import { Work } from './sections/work/work';

@Component({
  selector: 'app-home',
  imports: [Hero, Work, Services, Engagement, About, Clients, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
