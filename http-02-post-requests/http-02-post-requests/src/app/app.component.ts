import { Post } from './post.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {PostsService} from './posts.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  @ViewChild('postForm', {static: true}) postForm: NgForm;
  errorSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
        this.isFetching = false;
        console.log(error);
      }
    );
    this.errorSub = this.postsService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.clearFields();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts(form: NgForm) {
    // Send Http request
    this.postsService.deleteAllPosts().subscribe(
      (responseData) => {
        this.loadedPosts = [];
        this.isFetching = false;
      }
    );
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  private clearFields() {
    this.postForm.resetForm();
  }

  public onHandleError() {
    this.error = null;
  }
}
