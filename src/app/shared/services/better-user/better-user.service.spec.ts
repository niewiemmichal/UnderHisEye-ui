import { TestBed } from '@angular/core/testing';

import { BetterUserService } from './better-user.service';

describe('BetterUserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BetterUserService = TestBed.get(BetterUserService);
        expect(service).toBeTruthy();
    });
});
