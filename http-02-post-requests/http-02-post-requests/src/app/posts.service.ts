import {Injectable} from '@angular/core'
import {map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    // the .json at the end of the url is a firebase-only requirement. Not required by REST or Angular
    this.http.post<{name: string, content: string}>(
      'https://ng-guided-project.firebaseio.com/posts.json',
      postData,
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'})
      }
    ).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post}>('https://ng-guided-project.firebaseio.com/posts.json').pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id : key});
          }
        }
        return postsArray;
      }),
      catchError((errorRes) => { //catchError is meant to be used with the pipe() function, and can be an alternative way to deal with errors.
        //do some error handling logic
        return throwError(errorRes);
      })
    );
  }

  deleteAllPosts() {
    return this.http.delete('https://ng-guided-project.firebaseio.com/posts.json');
  }
}
