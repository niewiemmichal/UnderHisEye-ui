/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AssistantsService } from './services/assistants.service';
import { DoctorsService } from './services/doctors.service';
import { ExaminationsService } from './services/examinations.service';
import { IcdService } from './services/icd.service';
import { RegistrantsService } from './services/registrants.service';
import { SupervisorsService } from './services/supervisors.service';
import { UsersService } from './services/users.service';
import { VisitsService } from './services/visits.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AssistantsService,
    DoctorsService,
    ExaminationsService,
    IcdService,
    RegistrantsService,
    SupervisorsService,
    UsersService,
    VisitsService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
