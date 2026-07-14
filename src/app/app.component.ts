import { AfterViewInit, Component } from '@angular/core';
import { IconsService } from './services/icons.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './Contact/contact.component';
import { ScrollOnTopDirective } from './Directives/scroll-on-top.directive';
import * as aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    TopNavComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    ScrollOnTopDirective
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  constructor(private icon: IconsService) { }

  ngAfterViewInit(): void {
    // Init once the view (all child components) has rendered.
    aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Recalculate trigger positions once images/fonts finish loading, so a
    // cold load (slow assets) animates the same as a cached refresh.
    if (document.readyState === 'complete') {
      aos.refreshHard();
    } else {
      window.addEventListener('load', () => aos.refreshHard(), { once: true });
    }
  }
}
