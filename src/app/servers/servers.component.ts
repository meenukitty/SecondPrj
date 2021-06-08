import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  activate = false;
  CreateNewServer = "Event Binding offline";
  updatedName = 'Tester';
  password = false;
  logs = [] as any;
  //logs : number[] = [];
  //arrays are in string so representing their type for varaible to find their length

  //Property Binding : setting the button disabled for 2 seconds
  constructor() {
    setTimeout(() => {
      this.activate = true;
    }, 2000);
  }

  //Example for Directives ngIf ngFor ngStyle ngClass
  onToggle() {
    this.password = !this.password; // true =! false
    this.logs.push(this.logs.length + 1);

  }

  ngOnInit(): void {
  }

  //Event Binding 
  OnCreateServer() {
    //this.CreateNewServer = "Event Binding successfull"
    this.CreateNewServer = "Event Binding successfull! Updated Name " + this.updatedName;
    // 1st message for event binding for button click event
    // + message shows the value of 2 way binding
  }

  //2 way binding
  OnUpdate(event: Event) {
    this.updatedName = (<HTMLInputElement>event.target).value;
  }
}
