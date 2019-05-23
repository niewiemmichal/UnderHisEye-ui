import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BetterUserService } from 'src/app/shared/services/better-user/better-user.service';
import { NewUser } from 'src/app/shared/services/better-user/new-user';
import { BetterUser } from 'src/app/shared/services/better-user/better-user';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
    @Output() added: EventEmitter<BetterUser> = new EventEmitter<BetterUser>();
    @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

    newUserForm: FormGroup = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(),
        gmcNumber: new FormControl(),
        role: new FormControl(),
    });

    roles: string[] = [];

    constructor(private userService: BetterUserService, private snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.roles = this.userService.roles;
    }

    cancel(): void {
        this.canceled.emit(true);
    }

    onSubmit(): void {
        let user: NewUser = new NewUser(this.newUserForm.value);
        this.userService.addUser(user).subscribe(
            (addedUser: BetterUser) => {
                this.snackBar.open('Success!', null, {
                    duration: 1500,
                });
                this.added.emit(addedUser);
            },
            _ => {
                this.snackBar.open('Something went wrong..', 'Ok');
            }
        );
    }
}
