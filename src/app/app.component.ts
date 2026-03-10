import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './store/user/user.action';
import * as UserSelectors from './store/user/user.selectors';
// import {User} '../app/user.inter'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 user:any ;
  
  // users$ = this.store.select(UserSelectors.selectUsers);
  // loading$ = this.store.select(UserSelectors.selectLoading);




  constructor(private store: Store) {}

  ngOnInit() {
  const data:any = {id:1, name : 'Elamaran',phone: '8056946241'}

  this.user = data
  console.log(this.user)
  }

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }


  upload(data:any){
    console.log(data)
    console.log(data.target.files[0])
  }
}
