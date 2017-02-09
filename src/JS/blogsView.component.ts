//Directive for blogs view.

module JoymonOnline {
    export class BlogsViewDirective implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        constructor() {
            this.templateUrl = 'JS/blogsView.component.html';
        }
    }
    require('./app/app').JoymonOnline.AppModule.getInstance().registerComponent("blogsView",new BlogsViewDirective());
}