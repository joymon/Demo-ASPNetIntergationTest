var appmodule = require('./app');
//Directive for individual Blog Feed

import feedServiceModule = require ('./feed.service');

    export class BlogFeedController implements ng.IController {
        static $inject = ['DataService'];
        dataServie: feedServiceModule.BlogDataService;
        constructor( dataServie: feedServiceModule.BlogDataService) {
            console.log("BlogFeedController created");
            this.dataServie = dataServie;
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
        }
        $onInit?(): void{
            this.dataServie.GetPosts(this.rss)
                .then((value: ng.IHttpPromiseCallbackArg<JoymonOnline.BlogFeedResponse>) => {
                    console.log(value.data.feed);
                    this.Feed = value.data.feed;
                })
                .catch((err) => { console.log("Error" + err); });
        }
        public rss: string;
        public Feed: JoymonOnline.BlogFeed;
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
    require('./app').JoymonOnline.AppModule.getInstance().registerComponent("blogFeed",new BlogFeedComponent());
