import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LaboratoireListComponent } from './laboratoire-list/laboratoire-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LaboratoireListComponent,
    HttpClientModule
  ]
})
export class AppComponent {
  title = 'angular-front';
}
