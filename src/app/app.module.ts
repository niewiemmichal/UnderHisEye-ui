import { NgModule, Provider, forwardRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ApiModule } from './api/api.module';
import { CookieService } from 'ngx-cookie-service';
import { SidenavModule } from './sidenav/sidenav.module';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';

export const API_INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useExisting: forwardRef(() => ApiInterceptor),
    multi: true,
};

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        SidenavModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ApiModule.forRoot({ rootUrl: 'https://api.underhiseye.live' }),
        MaterialModule,
    ],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
        CookieService,
        ApiInterceptor,
        API_INTERCEPTOR_PROVIDER
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
