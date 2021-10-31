import { AddQuestionComponent } from './forms/add-question/add-question.component';
import { AddLocationComponent } from './forms/add-location/add-location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEventComponent } from './forms/add-event/add-event.component';
import { AddFacultyComponent } from './forms/add-faculty/add-faculty.component';
import { AddMajorComponent } from './forms/add-major/add-major.component';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';
import { EditEventComponent } from './forms/edit-event/edit-event.component';
import { EditAnswerComponent } from './forms/edit-answer/edit-answer.component';
import { EditFacultyComponent } from './forms/edit-faculty/edit-faculty.component';
import { EditMajorComponent } from './forms/edit-major/edit-major.component';
import { EditLocationComponent } from './forms/edit-location/edit-location.component';
import { EditQuestionComponent } from './forms/edit-question/edit-question.component';
import { EditRegEventComponent } from './forms/edit-reg-event/edit-reg-event.component';
import { EventComponent } from './report/event/event.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'register_user', component: AddUserComponent },
      { path: 'add_event', component: AddEventComponent },
      { path: 'add_location', component: AddLocationComponent },
      { path: 'add_faculty', component: AddFacultyComponent },
      { path: 'add_major', component: AddMajorComponent },
      { path: 'add_question', component: AddQuestionComponent },
      { path: 'edit_user', component: EditUserComponent },
      { path: 'edit_event', component: EditEventComponent },
      { path: 'edit_answer', component: EditAnswerComponent },
      { path: 'edit_faculty', component: EditFacultyComponent },
      { path: 'edit_major', component: EditMajorComponent },
      { path: 'edit_location', component: EditLocationComponent },
      { path: 'edit_question', component: EditQuestionComponent },
      { path: 'edit_reg_event', component: EditRegEventComponent },
      { path: 'report_event', component: EventComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
