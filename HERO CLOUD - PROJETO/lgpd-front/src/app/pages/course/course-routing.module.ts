import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseFormComponent } from "./course-form/course-form.component";

const routes: Routes = [
  {
    path: "courses",
    component: CourseListComponent,
  },
  {
    path: "addCourse",
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
