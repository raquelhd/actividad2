import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent /*implements OnInit*/ {
loginForm = this.fb.group({
  username: '',
  password: ''
});

constructor( 
  private route: Router,
  private fb: FormBuilder
) {}

/*ngOnInit() {}*/

submit() {
 /*const username = this.loginForm.get('username').value;
  const password = this.loginForm.get('password').value;
  */
    this.route.navigate(['index']);
  }
  
  



clickIcon(){

}

}
