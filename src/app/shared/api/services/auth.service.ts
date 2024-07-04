import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  http = inject(HttpClient)

  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'

login(payload: {username: string, password: string}) {
  return this.http.post(`${this.baseApiUrl}token`, payload)
}
}
