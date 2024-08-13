import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


export const routes: Routes = [
    { path: '', title : 'Home - Tfgi' ,component: HomeComponent },
    { path: 'about', title : 'About - Tfgi' , component: AboutComponent },
    { path: 'works', title : 'Works - Tfgi' , component: WorksComponent },
    { path: 'posts', title : 'Posts - Tfgi' , component: PostsComponent },
   // { path: '',   redirectTo: '/home', pathMatch: 'full' }, // permet la redirection si rien rentrer
    { path: '**', title : '404 not found - Tfgi' , component: NotfoundComponent},  // Wildcard route for a 404 page
];
