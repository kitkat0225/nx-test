import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  visible: boolean = false;
  results: Array<any> = [{
    image_path: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
    _id: 1,
    name: 'Alex'
  }, {
    image_path: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
    _id: 2,
    name: 'Tomason'
  }];

  constructor() { }

  ngOnInit(): void {
    this.visible = true;
  }

  showEmployee(employee_id: any) {

  }
}
