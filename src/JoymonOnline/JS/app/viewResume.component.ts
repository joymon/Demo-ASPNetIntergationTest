/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.

namespace JoymonOnline {
    export class ViewResumeComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/viewResume.component.html';
        }
    }
    AppModule.getInstance().registerComponent("viewResume",new ViewResumeComponent());
}