import { Component, OnInit } from "@angular/core";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SharedService } from "src/app/shared/shared.service";
import { EvaluationService } from "../evaluation.service";

@Component({
  selector: "app-evaluation-list",
  templateUrl: "./evaluation-list.component.html",
  styleUrls: ["./evaluation-list.component.scss"],
})
export class EvaluationListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  userLabel: Array<{ value: String; label: String }> = [];
  courseLabel: Array<{ value: String; label: String }> = [];

  evaluations: any[] = [];

  constructor(
    private evaluationService: EvaluationService,
    private sharedService: SharedService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.listEvaluations();
    this.sharedService
      .getCourses()
      .subscribe((course) => (this.courseLabel = course));
    this.sharedService.getUsers().subscribe((user) => (this.userLabel = user));
  }

  async listEvaluations(): Promise<void> {
    this.evaluations = await this.evaluationService.get<any[]>({
      url: "http://localhost:3000/getAllEvaluations",
      params: {},
    });
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar esta avaliação?")) {
      await this.evaluationService.delete<any>({
        url: `http://localhost:3000/deleteEvaluation/${id}`,
        params: {},
      });
      await this.listEvaluations();
    }
  }

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
