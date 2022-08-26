
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

   loginform = new FormGroup({
    
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    
  })

  ngOnInit(): void {  
  }
 
 login(){

  console.log("login from login")
  let body = {
    username:this.loginform.value.username,
    password:this.loginform.value.password
  }
  
  this.authService.login(body).subscribe({next:(response)=>{
   console.log(response)
    this.router.navigateByUrl("admin")
    
  },
  error:(error)=>{
    console.log(error);
  }
  
});
}
}

