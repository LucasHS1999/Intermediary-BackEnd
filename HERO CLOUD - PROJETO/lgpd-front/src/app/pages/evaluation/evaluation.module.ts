import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvaluationRoutingModule } from "./evaluation-routing.module";
import { EvaluationFormComponent } from "./evaluation-form/evaluation-form.component";
import { EvaluationListComponent } from "./evaluation-list/evaluation-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [EvaluationFormComponent, EvaluationListComponent],
  imports: [CommonModule, EvaluationRoutingModule, SharedModule],
})
export class EvaluationModule {}
