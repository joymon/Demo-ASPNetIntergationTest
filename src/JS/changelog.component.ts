//Directive for Changelog view.
var appmodule = require('./app/app');

    export class ChangelogDirective implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        constructor() {
            this.templateUrl = 'JS/changelog.component.html';
        }
    }
    appmodule.JoymonOnline.AppModule.getInstance().registerComponent("changelog", new ChangelogDirective());