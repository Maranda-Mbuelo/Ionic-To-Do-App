import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../types/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiUrl;

  // getAllPost(): Observable<Post[]>{
  //   return this.http.get<Post[]>(this.apiBaseUrl + '/api/Posts');
  // }

  getAllPost() {
    // return this.http.get<any>(this.apiBaseUrl + '/api/Cars');

    this.http.get(`${this.apiBaseUrl}/api/Posts`).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  

}
