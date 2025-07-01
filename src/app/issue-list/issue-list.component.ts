import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgClass } from '@angular/common';
import { IssueReportComponent } from "../issue-report/issue-report.component";

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, NgIf, NgClass, IssueReportComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues = () => this.issues = this.issueService.getPendingIssues();

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }
}
