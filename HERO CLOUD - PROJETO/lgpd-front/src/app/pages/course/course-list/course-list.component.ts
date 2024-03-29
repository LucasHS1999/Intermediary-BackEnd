import { Component, OnInit } from "@angular/core";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
})
export class CourseListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  userLabel: Array<{ value: String; label: String }> = [];
  courseLabel: Array<{ value: String; label: String }> = [];

  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  async ngOnInit(): Promise<void> {
    await this.listCourses();
  }

  async listCourses(): Promise<void> {
    this.courses = await this.courseService.get<any[]>({
      url: "http://localhost:3000/getAllCourses",
      params: {},
    });
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este curso?")) {
      await this.courseService.delete<any>({
        url: `http://localhost:3000/deleteCourse/${id}`,
        params: {},
      });
      await this.listCourses();
    }
  }

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
