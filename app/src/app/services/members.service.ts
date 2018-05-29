import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Member } from "../types/member";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class MembersService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };
  private membersUrl = `https://${environment.url}/api/members`;

  create(member: string) {
    console.log(member);
    return this.http.post<Member[]>(this.membersUrl, member, this.httpOptions);
  }

  getMembers() {
    return this.http.get<Member[]>(this.membersUrl, this.httpOptions)
  }

  delete(member) {
    //this.httpOptions.responseType = 'text';
    return this.http.delete<Member[]>(`${this.membersUrl}/${member._id}`, this.httpOptions);
  }
}
