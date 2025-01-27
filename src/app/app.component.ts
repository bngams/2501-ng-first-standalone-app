// import/export => JS/ES Modules => to reference or load a file
import { NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core'; // from a lib
import { RouterOutlet } from '@angular/router';
import { KebabCasePipe } from './pipes/kebab-case.pipe';

// annotations ou decorators (TS)
@Component({
  selector: 'app-root', // html tag <app-root></app-root>
  imports: [RouterOutlet, UpperCasePipe, KebabCasePipe, NgClass, NgIf], // load features in Angular
  templateUrl: './app.component.html', // template
  styleUrl: './app.component.scss', // style
  standalone: true, // allow component to load its own features (like an independant module)
})
export class AppComponent {
  title = 'My first app';

  doSomething(): void {
    console.log('doSomething....');
  }
}
