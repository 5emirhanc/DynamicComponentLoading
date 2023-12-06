import { Component, ViewChild, inject } from '@angular/core';
import { LoadComponentService } from './services/load-component.service';
import { LoadComponentDirective } from './directives/load-component.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadComponentService: LoadComponentService = inject(LoadComponentService);
  @ViewChild(LoadComponentDirective, { static: true })
  loadComponentDirective: LoadComponentDirective;
  async loadComponent() {
    this.loadComponentService.loadComponent(
      this.loadComponentDirective.viewContainerRef,
      (await import('../app/example/example.component')).ExampleComponent
    );
  }
}
