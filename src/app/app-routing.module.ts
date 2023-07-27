import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CartComponent } from "./component/cart/cart.component";
import { ProductsComponent } from "./component/courses/products.component";
import { CourseDetailsComponent } from "./component/course-details/course-details.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./component/home/home.component";
import { CourseEnrolledComponent } from "./component/course-enrolled/course-enrolled.component";
import { ErrorComponent } from "./component/error/error.component";
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";
import { UserComponent } from "./component/user/user.component";

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
    {path:'courses',component:ProductsComponent},
    {path:'courses/:id',component:CourseDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'enrolled/:id',component:CourseEnrolledComponent},
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path:'**',pathMatch:'full',component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }