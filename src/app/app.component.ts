import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClarityModule, IssueListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'issue-tracker';
}
