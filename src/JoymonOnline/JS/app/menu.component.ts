/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for Changelog view.

namespace JoymonOnline {
    class MenuController implements ng.IController {
        public items: Array<MenuItem>;
        constructor() {
            this.items = this.getMenuItems();
        }
        getMenuItems(): Array<MenuItem> {
            return [
                {
                    page: "Default",
                    faIcon: "home",
                    title: "Home"
                },
                {
                    page: "Resume",
                    faIcon: "file-text-o",
                    title: "Resume"
                },
                {
                    page: "Blogs",
                    faIcon: "rss",
                    title: "Blogs"
                },
                {
                    page: "Links",
                    faIcon: "link",
                    title: "Links"
                },
                {
                    page: "Projects",
                    faIcon: "windows",
                    title: "Projects"
                }
            ];
        }
    }
    export class MenuComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        constructor() {
            this.templateUrl = 'JS/app/menu.component.html';
            this.controller = MenuController;
        }
    }
    AppModule.getInstance().registerComponent("menu", new MenuComponent());
}