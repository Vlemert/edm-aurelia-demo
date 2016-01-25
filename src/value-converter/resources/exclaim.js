import {valueConverter} from 'aurelia-framework';

@valueConverter('exclaim')
export class Exclaim {
  toView(value) {
    return value.toUpperCase() + '!';
  }
}