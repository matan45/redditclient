import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VotePayload } from './vote.payload';

@Injectable({
    providedIn: 'root'
})
export class VoteService {   
    
    constructor(private http: HttpClient) { }

    vote(votePayload: VotePayload): Observable<any> {
        return this.http.post<void>("http://localhost:8080/api/votes/", votePayload);
    }
}