import {Injectable} from '@angular/core'
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    // the .json at the end of the url is a firebase-only requirement. Not required by REST or Angular
    this.http.post<{name: string, content: string}>('https://ng-guided-project.firebaseio.com/posts.json', postData).subscribe(
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
      }));
  }

  deleteAllPosts() {
    return this.http.delete('https://ng-guided-project.firebaseio.com/posts.json');
  }
}
