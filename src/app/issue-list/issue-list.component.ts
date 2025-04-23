import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [ClarityModule],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues = () => this.issues = this.issueService.getPendingIssues();
}
