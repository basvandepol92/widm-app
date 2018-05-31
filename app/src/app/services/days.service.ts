import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Day} from "../types/day";
import {environment} from "../../environments/environment";
import {Member} from "../types/member";

@Injectable({providedIn: 'root'})
export class DaysService {

    constructor(private http: HttpClient) {
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
        })
    };
    private daysUrl = `${environment.url}/api/days`;

    getDays() {
        return this.http.get<Day[]>(this.daysUrl, this.httpOptions)
    }

    create(day: string) {
        return this.http.post<Day[]>(this.daysUrl, day, this.httpOptions);
    }

    delete(day) {
        return this.http.delete<Day[]>(`${this.daysUrl}/${day._id}`, this.httpOptions);
    }


}
