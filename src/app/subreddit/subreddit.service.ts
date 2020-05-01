import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubredditModel } from './subreddit-model';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  
  constructor(private http: HttpClient) { }

  getSubreddit(subredditId: Number) {
    return this.http.get<SubredditModel>('http://localhost:8080/api/subreddit/'+subredditId);
  }

  getAllSubreddits(): Observable<SubredditModel[]> {
    return this.http.get<SubredditModel[]>('http://localhost:8080/api/subreddit/query/all');
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>('http://localhost:8080/api/subreddit/', subredditModel);
  }
}
