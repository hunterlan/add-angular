import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClassificationResponse} from "../models/classification-response";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  private readonly path: string = '/classify';
  constructor(private readonly httpClient: HttpClient) { }

  require(image: string) {
    return this.httpClient.post<ClassificationResponse>(this.path, {"image": image});
  }
}
