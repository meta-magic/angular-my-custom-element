import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  navigate(link: string) {
    this.router.navigate([{outlets: {mycustomelement: link}}]);
  }
}
