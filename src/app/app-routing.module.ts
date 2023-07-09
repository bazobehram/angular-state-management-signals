import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInfoComponent } from './person-info/person-info.component';

const routes: Routes = [{ path: '', component: PersonInfoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
