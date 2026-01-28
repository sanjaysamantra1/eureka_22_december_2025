import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  httpClient = inject(HttpClient); // Dependency Injection

  getAllComments() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments')
  }
}
