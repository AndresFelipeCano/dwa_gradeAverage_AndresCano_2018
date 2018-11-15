import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from '../ui/layout/layout.component';
import { PokemainComponent} from '../components/pokemain/pokemain.component';

const routes: Routes = [
  {
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
