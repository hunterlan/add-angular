import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ClassificationResponse} from "../models/classification-response";
import {ClassificationResult} from "../models/classification-result";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  private readonly path: string = '/classify';
  constructor(private readonly httpClient: HttpClient) { }

  require(image: string) {
    return this.httpClient.post<ClassificationResponse>(this.path, {"image": image});
  }

  get(requestId: string): Observable<ClassificationResult> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('request_id', requestId);
    return this.httpClient.get<ClassificationResult>(this.path, {params: httpParams});
  }
}
