import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server waa created"
  serverName = "Test Server"
  serverCreated = false
  servers = ['TestServer', 'TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000)
   }

  ngOnInit(): void {
  }

  onServerCreated() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created ' + this.serverName
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
