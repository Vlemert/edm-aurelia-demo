import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('exclaim')
@inject(Element)
export class Exclaim {
  constructor(element) {
    element.innerText = element.innerText + '!';
  }
}