import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  
  newServerName = '';
  newServerContent = '';
  newBlueprintName = '';
  newBlueprintContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddingServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddingBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newBlueprintName,
      blueprintContent: this.newBlueprintContent
    })
  }
}
