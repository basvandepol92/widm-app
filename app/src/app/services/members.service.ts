import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Member} from "../types/member";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class MembersService {
  private members = [];

  constructor(private http: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  private membersUrl = `${environment.url}/api/members`;

  create(member) {
    return this.http.post<Member[]>(this.membersUrl, member, this.httpOptions);
  }

  getMembers() {
    return this.http.get<Member[]>(this.membersUrl, this.httpOptions)
  }

  delete(member) {
    return this.http.delete<Member[]>(`${this.membersUrl}/${member._id}`, this.httpOptions);
  }

  setMembersArray(members) {
    this.members = members;
  }

  getMembersArray(refresh?) {
    return new Promise((resolve) => {
      if (this.members.length > 0 && refresh !== true) {
        resolve(this.members);
        return;
      }

      this.getMembers().subscribe(members => {
        members.sort((a, b) => a.name.localeCompare(b.name))
        this.setMembersArray(members);
        resolve(members);
      });
    })
  }
}
