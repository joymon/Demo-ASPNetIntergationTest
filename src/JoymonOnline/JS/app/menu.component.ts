/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.

namespace JoymonOnline {
    export class MenuComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/menu.component.html';
        }
    }
    AppModule.getInstance().registerComponent("menu",new MenuComponent());
}