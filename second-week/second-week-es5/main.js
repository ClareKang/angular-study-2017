// Set Component
(function(app) {
  app.HelloWorldComponent =
    ng.core
      .Component({
        selector: 'hello-world',
        template: '<h1>Hello {{ name }}!</h1>'
      })
      .Class({
        constructor: function() {
          this.name = 'Clare Kang ES6';
        }
      });
})(window.app || (window.app = {}));

// Set Module
(function (app) {
  app.AppModule =
    ng.core
      .NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [app.HelloWorldComponent],
        bootstrap: [app.HelloWorldComponent]
      })
      .Class({
        constructor: function() {}
      });
})(window.app || (window.app = {}));

// bootstrap
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
