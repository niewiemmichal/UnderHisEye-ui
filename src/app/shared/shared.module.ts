import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { LoginService } from './services/login/login.service';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MaterialModule, CommonModule],
    declarations: [TableComponent],
    providers: [LoginService],
    exports: [TableComponent],
})
export class SharedModule {}
