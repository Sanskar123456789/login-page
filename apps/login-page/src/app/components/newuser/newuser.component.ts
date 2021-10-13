import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { UserserviceService } from '../../services/userservice.service';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'login-page-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit,OnDestroy {

  form!: FormGroup;
  $endsub : Subject<any> = new Subject();
  constructor(private formbuilder: FormBuilder,private userService : UserserviceService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name : ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnDestroy() {
    this.$endsub.next();
    this.$endsub.complete();
  }

  Submit(){
    if(this.form.invalid){
      return;
    }
    else{
      const data = {
        name:this.form.controls.name.value,
        email:this.form.controls.email.value,
        phone:this.form.controls.phone.value,
        passwordHash:this.form.controls.password.value,
        isAdmin:false,
      }

      this.userService.postuser(data).pipe(takeUntil(this.$endsub)).subscribe(data => {
        console.log(data);
        alert("User added");
        timer(1000).toPromise().then(() =>{this.router.navigate(['/']);})
      })
    }
  }
}
