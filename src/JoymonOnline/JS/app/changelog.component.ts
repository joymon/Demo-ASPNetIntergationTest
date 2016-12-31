/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.

namespace JoymonOnline {
    export class ChangelogDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/changelog.component.html';
        }
    }
    AppModule.getInstance().registerDirective("changelog", () => {
        return new ChangelogDirective()
    });
}