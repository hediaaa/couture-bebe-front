import { Component , OnInit } from '@angular/core';
import {TokenStorageService} from './authentication/auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Private

  title = 'app';
  constructor(private tokenStorage: TokenStorageService) { }
  ngOnInit() {
  }
}

