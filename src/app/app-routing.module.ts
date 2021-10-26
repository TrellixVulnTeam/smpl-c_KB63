import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { CompanyProfileComponent } from "./profile/company-profile/company-profile.component";
import { AssessorProfileComponent } from "./profile/assessor-profile/assessor-profile.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { MyProfileComponent } from "./profile/my-profile/my-profile.component";
import { AdminDashboardComponent } from "./dashboard/admin-dashboard/admin-dashboard.component";
import { AssessorsComponent } from "./assessors/assessors.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { SelfAssessmentDashbroadComponent } from "./dashboard/self-assessment-dashbroad/self-assessment-dashbroad.component";
import { AssessmentComponent } from "./assessment/assessment.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "company-profile", component: CompanyProfileComponent },
  { path: "assessor-profile", component: AssessorProfileComponent },
  { path: "my-profile", component: MyProfileComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "assessors", component: AssessorsComponent },
  { path: "manageusers", component: ManageUsersComponent },
  { path: "selfassessment-dashbroad", component: SelfAssessmentDashbroadComponent },
  { path: "assessment", component: AssessmentComponent },
  
  
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
