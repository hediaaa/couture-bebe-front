import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import {AuthService} from '../auth/auth.service';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';


const routes = [
    {
        path     : 'auth/register',
        component: RegisterComponent

    }
];

@NgModule({
    declarations: [
        RegisterComponent
    ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    //  FuseSharedModule
  ],
    providers: [ AuthService]
})
export class RegisterModule
{
}
