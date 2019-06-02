import { TestBed, async, inject } from '@angular/core/testing';

import { RegistrantGuard } from './registrant.guard';

describe('RegistrantGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RegistrantGuard],
        });
    });

    it('should ...', inject([RegistrantGuard], (guard: RegistrantGuard) => {
        expect(guard).toBeTruthy();
    }));
});
