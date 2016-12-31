/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for blogs view.

namespace JoymonOnline {
    export class BlogsViewDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/blogsView.component.html';
        }
    }
    AppModule.getInstance().registerDirective("blogsView", () => {
        return new BlogsViewDirective()
    });
}