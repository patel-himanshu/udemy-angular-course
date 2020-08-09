import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() optionSelected = new EventEmitter<string>();

    onSelect(option: string) {
        this.optionSelected.emit(option);
    }
}