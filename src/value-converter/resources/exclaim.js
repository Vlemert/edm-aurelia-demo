import {valueConverter} from 'aurelia-framework';

@valueConverter('exclaim')
export class Exclaim {
  toView(value, nr, character) {
    nr = nr || 1;
    character = character || '!';
    
    let exclamationMarks = '';
    
    for (let i = 0; i < nr; i++) {
      exclamationMarks = exclamationMarks + character;
    }
    
    return value.toUpperCase() + exclamationMarks;
  }
}