/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual Blog Feed

namespace JoymonOnline {
    export class BlogFeedDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/feed.component.html';
            this.controller = "BlogFeedController";
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                rss: '@'
            };
        }
    }
    AppModule.getInstance().registerDirective("blogFeed", () => {
        console.log("Called reg fn");
        return new BlogFeedDirective()
    });
    export class BlogFeedController implements ng.IController {

        //static $inject = ['DataService'];
        constructor($scope:any,dataServie: BlogDataService) {
            console.log("BlogFeedController created");
            this.Url = "joymons world wpf";
            this.Feed = { entries: [] };
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            dataServie.GetPosts($scope.ctrl.rss)
                .then((value: ng.IHttpPromiseCallbackArg<BlogFeedResponse>) => {
                    console.log(value.data.feed);
                    this.Feed = value.data.feed;
                })
                .catch((err) => { console.log("Error" + err); });
        }
        public rss: string;
        public Feed: BlogFeed;
        public Url: string;
        getUrl(): string {
            return this.Url;
        }
    }
//    AppModule.getInstance().registerController("BlogFeedController", new BlogFeedController());
    AppModule.getInstance().registerControllerWithFactory("BlogFeedController", ($scope:any, DataService: BlogDataService)=> new BlogFeedController($scope,DataService));

}