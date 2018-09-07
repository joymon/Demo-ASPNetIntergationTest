//Directive for Changelog view.
/// <reference types="angular" />
/// <reference types="angular-route" />
/// <reference types="node" />
export module JoymonOnline {
    export class ViewResumeComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/viewResume.component.html';
        }
    }
   require('./app').JoymonOnline.AppModule.getInstance().registerComponent("viewResume",new ViewResumeComponent());
}