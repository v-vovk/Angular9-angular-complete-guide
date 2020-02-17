import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: [ './post-form.component.scss' ]
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) inputRef: ElementRef;

  title = '';
  text = '';

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };

      console.log(post);
      this.onAdd.emit(post);

      this.text = this.title = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
