import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ApiModule } from './api/api.module';
import { CookieService } from 'ngx-cookie-service';
import { SidenavModule } from './sidenav/sidenav.module';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        SidenavModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ApiModule.forRoot({ rootUrl: 'https://api.underhiseye.live' }),
        MaterialModule,
    ],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
        CookieService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
