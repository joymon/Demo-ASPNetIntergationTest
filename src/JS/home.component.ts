//Directive for Changelog view.

namespace JoymonOnline {
    export class HomeComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        constructor() {
            this.templateUrl = 'JS/home.component.html';
        }
    }
    require('./app/app').JoymonOnline.AppModule.getInstance().registerComponent("home",new HomeComponent());
}