import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { ActivatedRoute, Route } from "@angular/router";
import { TeacherService } from "../teacher.service";

@Component({
  selector: "app-teacher-form",
  templateUrl: "./teacher-form.component.html",
  styleUrls: ["./teacher-form.component.scss"],
})
export class TeacherFormComponent {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: "d-flex align-content-center justify-content-center",
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          key: "firstName",
          type: "input",
          props: {
            label: "Nome",
            placeholder: "Primeiro Nome",
            required: true,
          },
        },
        {
          key: "course_id",
          type: "input",
          props: {
            label: "Numero do Curso",
            placeholder: "Numero do Curso",
            required: true,
          },
        },
      ],
    },
  ];
}
