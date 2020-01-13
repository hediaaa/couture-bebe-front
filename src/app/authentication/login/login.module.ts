import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatLabel} from '@angular/material';
import {LoginComponent} from './login.component';
import {AuthService} from '../auth/auth.service';
import {FormBuilder, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes = [
  {
    path     : 'auth/login',
    component: LoginComponent
  }
];
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [ AuthService,   FormBuilder
]
})
export class LoginModule
{
}
