import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {

    //whitespace validation
    static notOnlyWhiteSpace(control: FormControl): ValidationErrors {

        //check if string only has white space
        if ((control.value != null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhiteSpace': true };
        }
        else {
            //valid hence return null
            return null;
        }
    }
}
