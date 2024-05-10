import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzServise: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzServise.characters];
  }

  onDeleteCharacters(id: string): void {
    this.dbzServise.deleteCharacterById( id );
  }

  onNewCharacters(character: Character): void {
    this.dbzServise.addCharacter( character );
  }
}
