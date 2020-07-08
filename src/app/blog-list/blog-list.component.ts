import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  headers: Observable<any>;
  constructor(private blogs:BlogServiceService) {
    this.headers = this.blogs.getService();
  }


  ngOnInit(): void {
  }

}
