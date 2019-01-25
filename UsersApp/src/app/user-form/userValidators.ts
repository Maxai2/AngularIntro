import { AbstractControl } from '@angular/forms';
import { PeopleService } from '../services/people.service';

export function nameRangeValidators(control: AbstractControl) {
    const value = control.value;

    if (value.length < 5 || value.length > 20) {
        return { nameRangeValidators: value };
    } else {
        return null;
    }
}

export class UserNameValidator {
    static createValidator(peopleService: PeopleService) {
        return (function(control: AbstractControl) {
            const value = control.value;
            if (peopleService.hasName(value)) {
                return { nameExists: value };
            } else {
                return null;
            }
        });
    }
}
