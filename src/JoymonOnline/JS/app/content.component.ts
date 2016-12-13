/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual content

namespace JoymonOnline {
    export class ContentDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/content.component.html';
            this.controller = "ContentController";
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                source: '@'
            };
        }
    }
    AppModule.getInstance().registerDirective("content", () => {
        console.log("Called reg fn");
        return new ContentDirective()
    });
    export class ContentController implements ng.IController {

        //static $inject = ['DataService'];
        constructor($scope:any,contentServie: ContentService) {
            this.Url = "joymons world wpf";
            this.Feed = { entries: [] };
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            contentServie.Get($scope.ctrl.source)
                .then((value: ng.IHttpPromiseCallbackArg<any>) => {
                    console.log(value.data.feed);
                    this.content = value.data;
                })
                .catch((err) => { console.log("Error" + err); });
            this.content = $scope.ctrl.source;
        }
        public content: string;
        public Feed: BlogFeed;
        public Url: string;
        getUrl(): string {
            return this.Url;
        }
    }
    AppModule.getInstance().registerControllerWithFactory("ContentController", ($scope:any, ContentService: ContentService)=> new ContentController($scope,ContentService));
}