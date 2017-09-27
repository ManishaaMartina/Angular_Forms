import { FormGroup, FormControl, Validators, FormBuilder } 
from '@angular/forms';
import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
    form: FormGroup;
    
    firstName = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });
    }
    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }
}


