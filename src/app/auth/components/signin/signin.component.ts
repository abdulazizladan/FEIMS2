import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Auth service
import { AuthService } from '../../services/auth.service';

//Material modules
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.reducer';
import { loginSuccess } from 'app/store/auth/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  errorMsg = '';

  private _unsubscribeAll: Subject<any>;

  constructor(
    private jwtAuth: JwtAuthService,
    private egretLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private auth: AuthService
  ) { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      //username: new FormControl('shamskhalil@gmail.com', Validators.required),
      email: new FormControl('', Validators.required),
      //password: new FormControl('shamsnet', Validators.required),
      password: new FormControl('', Validators.required),
      //rememberMe: new FormControl(true)
    });
  }

  ngAfterViewInit() {
    this.autoSignIn();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  signin() {
    //const signinData = this.signinForm.value

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    
    this.auth.login(this.signinForm.value).subscribe(
      res => {
        console.log(res)
        //this.router.navigateByUrl(this.jwtAuth.return)
      },
      err => {
        console.log(err)
      }
    )
    this.store.dispatch(loginSuccess({token: '1234', user: {name: 'xero'}}));
    //this.jwtAuth.signin(signinData.username, signinData.password)
    //  .subscribe(response => {
    //    this.router.navigateByUrl(this.jwtAuth.return);
    //  }, err => {
    //    this.submitButton.disabled = false;
    //    this.progressBar.mode = 'determinate';
    //    this.errorMsg = err.message;
    //    // console.log(err);
    //  })
  }

  autoSignIn() {
    if (this.jwtAuth.return === '/') {
      return
    }
    this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0, 20)}...`, { width: '320px' });
    setTimeout(() => {
      this.signin();
      console.log('autoSignIn');
      this.egretLoader.close()
    }, 5000);
  }

}
