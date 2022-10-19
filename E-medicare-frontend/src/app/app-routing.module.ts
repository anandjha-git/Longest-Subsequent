import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UpdatemedicineComponent } from './adminpage/updatemedicine/updatemedicine.component';
import { AddmedicineComponent } from './adminpage/addmedicine/addmedicine.component';
import { CartComponent } from './userpage/cart/cart.component';
import { BillingComponent } from './userpage/cart/billing/billing.component';
import { ContactComponent } from './contact/contact.component';
import { ViewcontactusComponent } from './viewcontactus/viewcontactus.component';
import { ProfileComponent } from './userpage/profile/profile.component';

const routes: Routes = [
 {path:"header", component:HeaderComponent},
 { path: "", redirectTo: 'user', pathMatch: 'full' },
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"user", component:UserComponent},
  {path:"about", component:AboutComponent},
  {path:"footer", component:FooterComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"adminpage", component:AdminpageComponent},
  {path:"userpage", component:UserpageComponent},
  {path: "updatemedicine/:medicineId", component:UpdatemedicineComponent},
  {path : "addmedicine", component:AddmedicineComponent},
  {path:"cart", component:CartComponent},
  {path:"billing/:medicineId", component:BillingComponent},
  {path : "contact", component:ContactComponent},
  {path : "profile", component:ProfileComponent},
  {path :"viewcontactus", component:ViewcontactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
