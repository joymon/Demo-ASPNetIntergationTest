/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual Blog Feed

namespace JoymonOnline {
    export class BlogFeedDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        bindToController?: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/feed.component.html';
            this.controller = "BlogFeedController";
            this.controllerAs = "ctrl";
            this.bindToController = {
                rss: '@'
            };
        }
    }
    AppModule.getInstance().registerDirective("blogFeed", () => {
        console.log("Called reg fn");
        return new BlogFeedDirective()
    });
    export class BlogFeedController implements ng.IController {

        //static $inject = ['$location', 'toaster'];
        constructor() {
            console.log("BlogFeedController created");
            this.Url = "joymons word wpf";
            this.Feed = { Posts: [] };
            this.Feed.Posts.push({ Title: "Test Title", PublishDate: new Date(), Content: "test content", Url: 'test ur' });
            this.Feed.Posts.push({ Title: "Test Title2", PublishDate: new Date(), Content: "test content2", Url: 'test url2' });
        }
        public Feed: BlogFeed;
        public Url: string;
        getUrl(): string {
            return this.Url;
        }
    }
    AppModule.getInstance().registerController("BlogFeedController", new BlogFeedController());
}