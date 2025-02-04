import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myForm: FormGroup;

  formFields = [
    { name: 'firstname', label: 'First Name', type: 'text'},
    { name: 'lastname', label: 'Last Name', type: 'text'},
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'username', label: 'Username', type: 'text'},
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'address', label: 'Address', type: 'textarea'},
  ];

  constructor(private fb: FormBuilder) { 


    const formControls: { [key: string]: any } = {}; 
    this.formFields.forEach(field => {
      formControls[field.name] = [''];
    });
    this.myForm = this.fb.group(formControls);
  }
    /*this.myForm = this.fb.group({

      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address:"",
      city: "",
      state: "",
      zip: "",
    });*/
  

  ngOnInit(): void {
    
  }
}
  
  






 


