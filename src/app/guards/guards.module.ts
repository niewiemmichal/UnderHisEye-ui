import { NgModule } from '@angular/core';
import { LoginGuard } from './login.guard';
import { AppGuard } from './app.guard';
import { AdminGuard } from './admin.guard';

@NgModule({
    providers: [LoginGuard, AppGuard, AdminGuard],
})
export class GuardsModule {}
