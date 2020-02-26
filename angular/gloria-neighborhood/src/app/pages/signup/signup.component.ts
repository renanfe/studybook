import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  title: String;
  userForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService) {
      this.title = 'Sign Up';
      this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', Validators.required],
      username: ['',Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  create(value: any){
    console.log(value);
    
    this.userService.createUser(value);
  }

}
