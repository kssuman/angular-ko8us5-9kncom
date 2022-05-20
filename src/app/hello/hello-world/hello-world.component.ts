import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  //template: '<h2>Hello World</h2><p>This is my first component</p>',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  public hello: string = 'Hello Everyone';
  public disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  helloClick(): void {
    this.hello = 'Hello Clicked';
  }
}
