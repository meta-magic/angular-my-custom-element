import {Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(
    private router: Router) { }

  ngOnInit() {
    this.router.initialNavigation(); 
  }

}
