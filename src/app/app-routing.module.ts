import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./post/home/home.component";
import { CreatePostComponent } from "./post/create-post/create-post.component";
import { CreateSubredditComponent } from "./subreddit/create-subreddit/create-subreddit.component";
import { ViewPostComponent } from "./post/view-post/view-post.component";
import { LoginComponent } from "./auth/login/login.component";
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'view-post/:id', component: ViewPostComponent },
    { path: 'list-subreddits', component: ListSubredditComponent },
    { path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuard] },
    { path: 'create-subreddit', component: CreateSubredditComponent,canActivate: [AuthGuard] },
    { path: 'user-profile/:name', component: UserProfileComponent,canActivate: [AuthGuard] },
    { path: 'sign-up', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
