import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserserviceService } from '../../services/userservice.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'login-page-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit,OnDestroy {
  form!: FormGroup;
  $endsub : Subject<any> = new Subject();
  constructor(private formbuilder: FormBuilder ,private router: Router,private userService: UserserviceService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }
  ngOnDestroy(){
    this.$endsub.next();
    this.$endsub.complete();
  }

  Submit(){
    console.log("Button pressed");
    if(this.form.invalid){
      return;
    }
    else{
      const data = {
        email:this.form.controls.email.value,
        passwordHash:this.form.controls.password.value,
      }
      this.userService.checkisuser(data).pipe(takeUntil(this.$endsub)).subscribe(data => {
        console.log(data);
        localStorage.setItem("token", JSON.stringify(data.token));
        this.router.navigate(['/dashboard']);
      })
    }    
  }
  newuser(){
    this.router.navigate(['/newuser']);
  }
}
