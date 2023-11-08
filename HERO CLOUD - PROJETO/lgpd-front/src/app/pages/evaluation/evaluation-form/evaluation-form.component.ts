import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { SharedService } from "src/app/shared/shared.service";
import { TeacherService } from "../../teacher/teacher.service";
import { EvaluationService } from "../evaluation.service";

@Component({
  selector: "app-evaluation-form",
  templateUrl: "./evaluation-form.component.html",
  styleUrls: ["./evaluation-form.component.scss"],
})
export class EvaluationFormComponent {
  evaluation: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: "d-flex align-content-center justify-content-center",
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          key: "user_id",
          type: "input",
          props: {
            label: "Id do Usuario",
            required: true,
          },
        },
        {
          key: "course_id",
          type: "input",
          props: {
            label: "Id do Curso",
            required: true,
          },
        },
        {
          key: "concept",
          type: "input",
          props: {
            label: "Conceito",
            placeholder: "Conceito da Avaliação",
            required: true,
          },
        },
      ],
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evaluationService: EvaluationService,
    private sharedService: SharedService
  ) {
    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.evaluation = await this.evaluationService.get<any>({
          url: `http://localhost:3000/evaluation/${params.id}`,
          params: {},
        });
        this.model = this.evaluation;
      } else {
        this.model = {};
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.evaluation = await this.evaluationService.put<any>({
          url: `http://localhost:3000/updateEvaluation/${this.model?.id}`,
          params: {},
          data: this.model,
        });
      } else {
        delete this.model?.id;
        await this.evaluationService.post<any>({
          url: `http://localhost:3000/addEvaluation`,
          params: {},
          data: this.model,
        });
      }
    }
    await this.router.navigate(["/evaluations"]);
  }
}
