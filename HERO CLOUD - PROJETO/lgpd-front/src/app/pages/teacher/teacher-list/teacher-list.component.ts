import { SharedService } from "./../../../shared/shared.service";
import { Component } from "@angular/core";
import { TeacherService } from "../teacher.service";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-teacher-list",
  templateUrl: "./teacher-list.component.html",
  styleUrls: ["./teacher-list.component.scss"],
})
export class TeacherListComponent {
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{ value: String; label: String }> = [];
  teachers: any[] = [];

  constructor(
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) {}

  async ngOnInit(): Promise<void> {
    this.courseLabel = await this.sharedService.convertCourseToOption();
  }

  getLabelCourse(value: String): String | undefined {
    let course = this.courseLabel.find((course) => course.value == value);
    return course?.label;
  }
}
