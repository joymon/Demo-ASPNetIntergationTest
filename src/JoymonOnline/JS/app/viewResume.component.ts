//Directive for Changelog view.
export module JoymonOnline {
    export class ViewResumeComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/viewResume.component.html';
        }
    }
   
   require('./app').JoymonOnline.AppModule.getInstance().registerComponent("viewResume",new ViewResumeComponent());
}