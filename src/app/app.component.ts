import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ScheduleCallComponent } from './schedule-call/schedule-call.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScheduleCallComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thinkindata';
}
