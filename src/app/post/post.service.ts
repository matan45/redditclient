import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post.model';
import { Observable } from 'rxjs';
import { CommentPayload } from './commentpayload';
import { CreatePostPayload } from './create-post/create-post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {   
  constructor(private http: HttpClient) { }

  getPost(postId: Number): Observable<PostModel> {
    return this.http.get<PostModel>('http://localhost:8080/api/posts/query/' + postId);
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/query/all');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/posts/', postPayload);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/comments/create', commentPayload);
  }

  getAllComments(postId: Number): Observable<CommentPayload[]> {
    return this.http.get<CommentPayload[]>('http://localhost:8080/api/comments/query/' + postId);
  }

  getAllPostsBySubreddit(subredditId: Number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/query/all/subreddit/' + subredditId);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/query/user/' + name);
  }

  getAllCommentsByUser(name: string): Observable<CommentPayload[]> {
    return this.http.get<CommentPayload[]>('http://localhost:8080/api/comments/query/user/' + name);
  }
}
