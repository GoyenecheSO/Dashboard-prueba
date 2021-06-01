import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentAreaComponent } from './content-area/content-area.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
     {path: "", component: HomeComponent},
     {path: ":city", component: ContentAreaComponent},
     {path: "**", component : HomeComponent}
]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders : any [] = [];
