import { Component,OnInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.css']
})
export class ReactiveFormsExampleComponent {
  signUpForm! : FormGroup

  constructor(){

  }


  ngOnInit(): void {
    this.createRegistrationForm();
   // this.createRegistrationFormWithBuilder();
  }

  createRegistrationForm(){
     this.signUpForm = new FormGroup({
       "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "lastName":new FormControl('',[Validators.minLength(2),Validators.maxLength(10)]),
       "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       "gender":new FormControl('',[]),
       "email":new FormControl('',[]),
       //nested form 
       "address":new FormGroup({
        "line1":new FormControl('',[Validators.required]),
        "line2":new FormControl('',[]),
        "city":new FormControl('',[]),
        "state":new FormControl('',[]),
      })
      })
  }


  
  save(){
    console.log("form data",this.signUpForm.value);
  }

  get firstName(){
   // this.signUpForm.get('firstName');
    return this.signUpForm.controls['firstName'];
  }

  get mobileNo(){
    return this.signUpForm.get("mobileNo");
  }
} 

