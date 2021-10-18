import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './forms/add-event/add-event.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { AddLocationComponent } from './forms/add-location/add-location.component';
import { AddMajorComponent } from './forms/add-major/add-major.component';
import { AddFacultyComponent } from './forms/add-faculty/add-faculty.component';
import { AddQuestionComponent } from './forms/add-question/add-question.component';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';
import { EditEventComponent } from './forms/edit-event/edit-event.component';
import { EditQuestionComponent } from './forms/edit-question/edit-question.component';
import { EditAnswerComponent } from './forms/edit-answer/edit-answer.component';
import { EditMajorComponent } from './forms/edit-major/edit-major.component';
import { EditFacultyComponent } from './forms/edit-faculty/edit-faculty.component';
import { EditLocationComponent } from './forms/edit-location/edit-location.component';
import { EditRegEventComponent } from './forms/edit-reg-event/edit-reg-event.component';



@NgModule({
  declarations: [
    AdminComponent,
    AddEventComponent,
    AddLocationComponent,
    AddMajorComponent,
    AddFacultyComponent,
    AddQuestionComponent,
    AddUserComponent,
    EditUserComponent,
    EditEventComponent,
    EditQuestionComponent,
    EditAnswerComponent,
    EditMajorComponent,
    EditFacultyComponent,
    EditLocationComponent,
    EditRegEventComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule
  ]
})
export class AdminModule { }
