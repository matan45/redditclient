import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts: PostModel[] = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit():void {
  }

}
