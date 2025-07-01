import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  issues: Issue[] = issues;

  getPendingIssues = (): Issue[] => this.issues.filter(i => !i.completed);

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };

    const index = this.issues.findIndex(i => i === issue);
    if (index !== -1) {
      this.issues[index] = selectedIssue;
    }
  }
}
