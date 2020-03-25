import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestsService } from '../requests/requests.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private requestsService: RequestsService,
    private authService: AuthService
  ) { }

  public uploadFile(fileName: string, file: any): Observable<any> {
    return this.requestsService.put({
      url: `/users/${this.authService.getUserId()}/avatar`,
      headers: new HttpHeaders({'x-file-name': fileName}),
      body: file
    });
  }

  public removeAvatar(): Observable<any> {
    return this.requestsService.delete({ url: `/users/${this.authService.getUserId()}/avatar` });
  }
}
