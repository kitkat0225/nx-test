import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.visible = true;
  }

}
