import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class MpesaAuthorizationService {
  constructor(private http: HttpClient) {}

  getAuthorizationToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          "cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==",
      }),
    };
    return this.http.get<any>(
      `${environment.mpesaAuthorizationUrl}`,
      httpOptions
    );
  }
}
