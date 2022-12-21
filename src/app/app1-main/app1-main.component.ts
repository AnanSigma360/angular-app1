import { Component, OnInit } from '@angular/core';
import { App2ServiceService } from 'angular-app2/src/app/app2-service/app2-service.service';

@Component({
  selector: 'app-app1-main',
  templateUrl: './app1-main.component.html',
  styleUrls: ['./app1-main.component.scss'],
})
export class App1MainComponent implements OnInit {
  testArray!: string[];

  constructor(private App2ServiceService: App2ServiceService) {}

  ngOnInit(): void {
    this.testArray = this.App2ServiceService.returnSomething();
    console.log('this.testArray',this.testArray);
    
  }
}
