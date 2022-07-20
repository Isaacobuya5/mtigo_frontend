import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Payment } from "src/types/Payment";

@Injectable()
export class MpesaPaymentService {
  constructor(private http: HttpClient) {}

  makePayment(payment: Payment): Observable<Payment> {
    // get the token
    const token = localStorage.getItem("access-token");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }),
    };
    return this.http.post<Payment>(
      `${environment.mpesaPaymentUrl}`,
      payment,
      httpOptions
    );
  }
}
