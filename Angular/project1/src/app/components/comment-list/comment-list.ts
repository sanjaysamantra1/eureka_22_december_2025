import { CommentService } from './../../services/comment-service';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentService = inject(CommentService);
  /* changeDetectorRef = inject(ChangeDetectorRef);
  commentArr: any = []; */
  commentArr: any = signal([]);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: any) => {
      this.commentArr.set(response);
      /* this.commentArr = response;
      this.changeDetectorRef.markForCheck(); */
    })
  }
}
