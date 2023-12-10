import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { retry } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class dbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 8500
    }
  ];
  addNewCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter);
  }

  // onDelete(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id?: string) {
    if (!id) return;

    this.characters = this.characters.filter(e => e.id !== id)
  }
}
