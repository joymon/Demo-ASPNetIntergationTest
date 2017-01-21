//Directive for Changelog view.

namespace JoymonOnline {
    export class ResumeComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = 'JS/app/resume.component.html';
        }
    }
    require('./app').JoymonOnline.AppModule.getInstance().registerComponent("resume",new ResumeComponent());
}