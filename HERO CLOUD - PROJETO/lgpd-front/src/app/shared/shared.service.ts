import { Injectable } from "@angular/core";
import { CourseService } from "../pages/course/course.service";
import { UserService } from "../pages/user/user.service";
import { map, Observable, of } from "rxjs";
export interface Paramns {
  [key: string]: any;
}

@Injectable({
  providedIn: "root",
})
export class SharedService {
  users: Array<{ id: String; first_name: String }> = [];
  courses: Array<{ id: String; name: String }> = [];

  userLabel: Array<{ value: String; label: String }> = [];
  courseLabel: Array<{ value: String; label: String }> = [];

  http: any;

  getUsers(): Observable<any[]> {
    return this.http.get("http://localhost:3000/getAllUsers").pipe(
      map((x) => {
        Object.values(x).map((_user) => {
          let u = { value: _user.id, label: _user.first_name };
          this.users.push(u);
        });
        console.log(x);
        console.log(this.users);
        return this.users;
      })
    );
  }

  getCourses(): Observable<any[]> {
    return this.http.get("http://localhost:3000/getAllCourses").pipe(
      map((x) => {
        Object.values(x).map((_course) => {
          let c = { value: _course.id, label: _course.name };
          this.courses.push(c);
        });
        console.log(x);
        console.log(this.users);
        return this.users;
      })
    );
  }

  async convertUserToOption(): Promise<any[]> {
    this.users.forEach((user: { id: String; first_name: String }) => {
      let u = {
        value: user.id.toString(),
        label: user.first_name,
      };
      this.userLabel.push(u);
    });
    return this.userLabel;
  }

  async convertCourseToOption(): Promise<any[]> {
    this.courses.forEach((course: { id: String; name: String }) => {
      let c = {
        value: course.id.toString(),
        label: course.name,
      };
      this.courseLabel.push(c);
    });
    return this.courseLabel;
  }

  constructor(
    private http: HttpClient;
    private userService: UserService,
    private courseService: CourseService
  ) {}
}
