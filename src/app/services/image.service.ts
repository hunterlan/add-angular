import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {ImageType} from "../models/image-type";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly path: string = '/images';

  constructor(private readonly httpClient: HttpClient) { }

  get(imageType: ImageType, count: number) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('what', imageType);
    httpParams = httpParams.set('count', count);
    return this.httpClient.get<string[]>(this.path, {params: httpParams});
  }

  put() {

  }
}
