import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageManageComponent } from './image-manage/image-manage.component';

const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'gallery/:id', component:GalleryComponent},
    {path:'contactus', component:ContactUsComponent},
    {path:'testimonials/:id', component:GalleryComponent},
    {path:'managefiles', component:ImageManageComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
