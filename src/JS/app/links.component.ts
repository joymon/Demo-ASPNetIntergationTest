//Directive for Changelog view.

module JoymonOnline {
    export class LinksComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/links.component.html';
        }
    }
    require('./app').JoymonOnline.AppModule.getInstance().registerComponent("links",new LinksComponent());
}