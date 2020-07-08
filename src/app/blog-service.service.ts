import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http:HttpClient) {}
    headerData
  getService(): Observable<any> {
    return this.http.get(
      "https://5f04f57a8b06d60016ddf26c.mockapi.io/blog"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }


  postService(data):Observable<any> {
    return this.http.post("https://5f04f57a8b06d60016ddf26c.mockapi.io/blog",data)
  }

  delProduct(id):Observable<any>{
    return this.http.delete(`https://5f04f57a8b06d60016ddf26c.mockapi.io/blog/${id}`)
  }

   
}

