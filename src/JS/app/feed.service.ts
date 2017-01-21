export class BlogDataService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        GetPosts(feedURL: string): ng.IHttpPromise<any> {
            
            let lurl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&q=' + encodeURIComponent(feedURL);
            lurl = "https://joymonscode.blogspot.com/feeds/posts/default?orderby=published&max-results=3&alt=json"
            var deffered = this.q.defer<any>();
            this.http.jsonp<any>(lurl)
                .then((s) => {
                    deffered.resolve({ data: s.data.responseData });
                })
                .catch((err) => { 
                    console.log('Error - ' + err);
                    deffered.reject(err); 
                });
            return deffered.promise;
        }
       
    }
export class FeedService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        
    GetPosts(feed:string) {
            var deffered = this.q.defer<any>();
            let urlFormat = "https://{blog}.blogspot.com/feeds/posts/default?orderby=published&max-results=3&alt=json"
            let actualUrl = urlFormat.replace('{blog}',feed)    
            this.http.jsonp<any>(actualUrl)
                .then((s) => {
                    var res : ng.IHttpPromiseCallbackArg<JoymonOnline.BlogFeedResponse> = {};
                    res = s;
                    var response : JoymonOnline.BlogFeedResponse = {feed: s.data.feed};
                    response.feed.link = s.data.feed.link[2].href;
                    response.feed.title = s.data.feed.title.$t;
                    response.feed.entries = s.data.feed.entry.map((entry)=>{
                        var postEntry: JoymonOnline.BlogPostEntry = {
                            title:entry.title.$t,
                            content: entry.content.$t,
                            link:entry.link[4].href,
                            publishedDate:entry.published.$t
                        };
                        return postEntry;
                    });
                    res.data = response;
                    deffered.resolve(res);
                })
                .catch((err) => { 
                    console.log('Error - ' + err);
                    deffered.reject(err); 
                });
            return deffered.promise;
        }
    }
    require('./app').JoymonOnline.AppModule.getInstance().registerService("DataService", FeedService);
    