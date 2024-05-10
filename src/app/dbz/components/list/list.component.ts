import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleted: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeletedId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(index: number): void {

    this.onDeleted.emit(index);

  }

  onDeleteCharacterById(id?: string): void {

    if( !id ) return;

    this.onDeletedId.emit(id);

  }

}
