import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/post/post.model';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VotePayload } from 'src/app/post/vote.payload';
import { AuthService } from 'src/app/auth/auth.service';
import { VoteService } from 'src/app/post/vote.service';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/post/post.service';
import { throwError } from 'rxjs';
import { VoteType } from 'src/app/post/votetype';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {
  @Input() post: PostModel;
  votePayload: VotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;

  constructor(private voteService: VoteService, private authService: AuthService,
    private postService: PostService, private toastr: ToastrService) {

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    }
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
      this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : '';
      this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : '';
    });
  }

  private setColorWhenUpVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.downvoteColor = '';
      return 'green';
    }
    return '';
  }

  private setColorWhenDownVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.upvoteColor = '';
      return 'red';
    }
    return '';
  }


  

}
