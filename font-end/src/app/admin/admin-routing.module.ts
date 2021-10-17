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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
