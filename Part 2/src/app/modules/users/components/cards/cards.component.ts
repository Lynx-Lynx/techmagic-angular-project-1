import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { IUser } from 'src/app/userInterface';
import { APIService } from './../../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  userName = '';
  inputValue = '';
  inputSelectValue = '';

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(2), Validators.required]),
    lastName: new FormControl('', [Validators.minLength(2), Validators.maxLength(60),Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.pattern(/[0-9]/), Validators.required]),
  });

  subscriptions: Subscription[] = [];
  
  addUserToList(user: any) {
    return this.users.push(user);
  }

  onSubmit() {
    this._apiService.addUsers({
      name:
        this.profileForm.controls.firstName.value +
        ' ' +
        this.profileForm.controls.lastName.value,
      email: this.profileForm.controls.email.value,
      phone: this.profileForm.controls.phone.value,
    }).subscribe(response => this.addUserToList(response));
    this.profileForm.reset();
  }


  constructor(
    private _usersService: UsersService,
    private _apiService: APIService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this._apiService.loadUsers().subscribe((data) => {
      this.users = data;
      this._usersService.shareUsers(this.users);
    });
    
    const sub1 = this._usersService.inputSource.subscribe(
      (data) => (this.inputValue = data)
    );
    const sub2 = this._usersService.inputSelect.subscribe(
      (data) => (this.inputSelectValue = data)
    );
    const sub3 = this._usersService.inputClear.subscribe(
      (data) => (this.inputValue = data)
    );
    this.subscriptions.push(sub1, sub2, sub3);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
