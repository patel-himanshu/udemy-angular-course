import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online {color: white;}`]
})
export class ServerComponent {
    serverID: number = Math.random()*100;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    
    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'rgb(245, 90, 90)';
    }
}