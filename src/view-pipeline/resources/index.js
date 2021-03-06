import {ViewEngine, customElement, inlineView} from 'aurelia-framework';
import commonmark from 'commonmark';

export function configure(config) {
  let viewEngine = config.container.get(ViewEngine);
  let loader = config.aurelia.loader;
  
  viewEngine.addResourcePlugin('.md', {
    'fetch': function(address) {
      return loader.loadText(address).then(markdown => {
        let elementName = address.replace('.md', '');
        let index = elementName.lastIndexOf('/');
        
        if (index !== 0) {
          elementName = elementName.substring(index + 1);
        }
        
        return { [elementName]: createMarkDownElement(elementName, markdown) };
      });
    }
  });
}

var reader = new commonmark.Parser(),
    writer = new commonmark.HtmlRenderer();

function getHtml(markdown) {
  return writer.render(reader.parse(markdown));
}

function createMarkDownElement(name, markdown) {
  let markup = getHtml(markdown);
  let template = `<template>${markup}</template>`;
  
  @customElement(name)
  @inlineView(template)
  class MarkdownElement {}
  
  console.log(markup);
  
  return MarkdownElement;
}