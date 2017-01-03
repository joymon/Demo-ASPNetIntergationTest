/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual Blog Feed

namespace JoymonOnline {
    export class BlogFeedController implements ng.IController {
        static $inject = ['DataService'];
        constructor( dataServie: BlogDataService) {
            console.log("BlogFeedController created");
            this.Url = "joymons world wpf";
            this.Feed = { entries: [] };
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            dataServie.GetPosts(this.rss)
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

    export class BlogFeedComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public bindings: { [boundProperty: string]: string };
        constructor() {
            this.templateUrl = 'JS/app/feed.component.html';
            this.controller = BlogFeedController;
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.bindings = {
                rss: '@',
            }
        }
    }
    AppModule.getInstance().registerComponent("blogFeed",new BlogFeedComponent());
}