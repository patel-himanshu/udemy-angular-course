import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverArray = [{type: 'server', name: 'Test Server', content: 'Just for testing'}];

  onAddingServer(serverData: {serverName: string, serverContent: string}) {
    this.serverArray.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddingBlueprint(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverArray.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
}
