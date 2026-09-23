import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Architecture } from './sections/architecture/architecture';
import { Contact } from './sections/contact/contact';
import { Engagement } from './sections/engagement/engagement';
import { Expertise } from './sections/expertise/expertise';
import { Hero } from './sections/hero/hero';
import { Industries } from './sections/industries/industries';
import { Pillars } from './sections/pillars/pillars';
import { Services } from './sections/services/services';
import { Solutions } from './sections/solutions/solutions';
import { Why } from './sections/why/why';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Pillars,
    Services,
    Expertise,
    Solutions,
    Architecture,
    Engagement,
    Industries,
    About,
    Why,
    Contact,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
