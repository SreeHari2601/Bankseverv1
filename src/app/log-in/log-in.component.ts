import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // to hold input values create variable 

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

login () {

  this.loginForm.get('acno')?.errors

 if (this.loginForm.valid) {
    alert("Successfully Logged-in, Please click ok to proceed ✅")
    let acno =this.loginForm.value.acno ;
    let pswd = this.loginForm.value.pswd
    console.log(acno);
    console.log(pswd);
  } 
  else {
   alert ("Invalid Ac number or Password")
  }
 
  
}

}
