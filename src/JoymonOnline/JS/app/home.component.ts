//Directive for Changelog view.

namespace JoymonOnline {
    export class HomeDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/home.component.html';
        }
    }
    require('./app').JoymonOnline.AppModule.getInstance().registerDirective("home", () => {
        return new HomeDirective()
    });
}