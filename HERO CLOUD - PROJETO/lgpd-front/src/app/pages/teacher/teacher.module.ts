import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherFormComponent } from "./teacher-form/teacher-form.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TeacherListComponent, TeacherFormComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
