import { TestBed, async, inject } from '@angular/core/testing';

import { AssistantGuard } from './assistant.guard';

describe('AssistantGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AssistantGuard],
        });
    });

    it('should ...', inject([AssistantGuard], (guard: AssistantGuard) => {
        expect(guard).toBeTruthy();
    }));
});
