/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.

namespace JoymonOnline {
    export class LinksComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/links.component.html';
        }
    }
    AppModule.getInstance().registerComponent("links",new LinksComponent());
}