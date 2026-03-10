import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.action';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
    constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(() =>

    this.actions$.pipe(

      ofType(UserActions.loadUsers),

      switchMap(() =>

        this.userService.getUsers().pipe(

          map(users => UserActions.loadUsersSuccess({ users })),

          catchError(error =>

            of(UserActions.loadUsersFailure({ error }))

          )
        )
      )
    )
  );


}