import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { LoginService } from './services/login/login.service';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { BetterUserService } from './services/better-user/better-user.service';

@NgModule({
    imports: [MaterialModule, CommonModule],
    declarations: [TableComponent],
    providers: [LoginService, BetterUserService],
    exports: [TableComponent],
})
export class SharedModule {}
