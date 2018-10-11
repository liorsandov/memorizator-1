import { Component, OnInit } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {  
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'

  constructor() { 
    setTimeout ( () =>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

buttonCliced(){
  console.log("Person Clicked On Button 1")
}

onCreateServer() {
  this.serverCreationStatus = 'Server was Created';
    console.log("New Server was Created")
  }

} 
