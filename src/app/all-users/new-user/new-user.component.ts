import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
    @Output() added: EventEmitter<any> = new EventEmitter<any>();
    @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

    addButtonClick(
        name: string,
        surname: string,
        pesel: number,
        role: string,
        password: string
    ): void {
        this.added.emit({ name, surname, pesel, role, password });
    }

    cancel(): void {
        this.canceled.emit(true);
    }
}
