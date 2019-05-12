import { NgModule } from '@angular/core';
import { LoginGuard } from './login.guard';
import { AppGuard } from './app.guard';

@NgModule({
    providers: [LoginGuard, AppGuard],
})
export class GuardsModule {}
