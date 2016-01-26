import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    // .feature('view-pipeline/resources')
    .developmentLogging();

  aurelia.start().then(a => a.setRoot('pojo/hello'));
  // aurelia.start().then(a => a.setRoot('html-only/app'));
  // aurelia.start().then(a => a.setRoot('router/app'));
  // aurelia.start().then(a => a.setRoot('custom-attribute/app'));
  // aurelia.start().then(a => a.setRoot('value-converter/app'));
  // aurelia.start().then(a => a.setRoot('view-pipeline/app'));
}
