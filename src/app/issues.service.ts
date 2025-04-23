import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  getPendingIssues = (): Issue[] => issues.filter(i => !i.completed);
}
