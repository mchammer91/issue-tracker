import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ClarityModule } from '@clr/angular';
import { NgIf } from '@angular/common';
import { IssueReportComponent } from "../issue-report/issue-report.component";

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [ClarityModule, NgIf, IssueReportComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues = () => this.issues = this.issueService.getPendingIssues();

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
}
